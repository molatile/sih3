import re
import os
from bs4 import BeautifulSoup

html_path = 'D:/ai man/sih3/tribal-scholarship-portal.html'
out_dir = 'D:/ai man/sih3/jago-portal/src/'

with open(html_path, 'r', encoding='utf-8') as f:
    content = f.read()

def html_to_jsx(html):
    if not html: return ''
    html = html.replace('class=', 'className=')
    html = html.replace('for=', 'htmlFor=')
    html = html.replace('stroke-width', 'strokeWidth')
    html = html.replace('stroke-linecap', 'strokeLinecap')
    html = html.replace('stroke-linejoin', 'strokeLinejoin')
    html = html.replace('fill-rule', 'fillRule')
    html = html.replace('clip-rule', 'clipRule')
    
    # remove inline onclicks to avoid syntax errors, they need to be reimplemented
    html = re.sub(r'\bonclick="[^"]*"', '', html)
    html = re.sub(r'\bonsubmit="[^"]*"', '', html)
    html = re.sub(r'\bonchange="[^"]*"', '', html)
    
    # self close tags
    html = re.sub(r'<(img|input|br|hr)([^>]*?)(?<!/)>', r'<\1\2 />', html)
    
    # inline styles
    def style_replacer(match):
        style_str = match.group(1)
        styles = []
        for prop in style_str.split(';'):
            prop = prop.strip()
            if not prop: continue
            if ':' not in prop: continue
            k, v = prop.split(':', 1)
            k = k.strip()
            parts = k.split('-')
            k = parts[0] + ''.join(p.capitalize() for p in parts[1:])
            v = v.strip()
            styles.append(f"'{k}': '{v}'")
        return 'style={{ ' + ', '.join(styles) + ' }}'
    html = re.sub(r'style="([^"]*)"', style_replacer, html)
    
    # replace comments inside JSX
    html = re.sub(r'<!--(.*?)-->', r'{/* \1 */}', html)
    
    # escape braces
    # html = html.replace('{', '{{').replace('}', '}}') # this breaks style={{}}
    
    return html

soup = BeautifulSoup(content, 'html.parser')

landing = soup.find(id='view-landing')
with open(os.path.join(out_dir, 'pages/LandingPage/LandingPage.jsx'), 'w', encoding='utf-8') as f:
    f.write('import React from \"react\";\nexport default function LandingPage({ setView }) {\n return (\n' + html_to_jsx(str(landing)) + '\n);\n}')

reg = soup.find(id='view-registration')
with open(os.path.join(out_dir, 'pages/RegistrationPage/RegistrationPage.jsx'), 'w', encoding='utf-8') as f:
    f.write('import React from \"react\";\nexport default function RegistrationPage({ appState, setAppState, setView }) {\n return (\n' + html_to_jsx(str(reg)) + '\n);\n}')

dash_shell = soup.find(id='view-dashboard-shell')
sidebar = soup.find(id='dashboard-sidebar')

# remove sidebar from dash shell for componentization
if sidebar:
    sidebar.extract()

with open(os.path.join(out_dir, 'components/layout/Sidebar.jsx'), 'w', encoding='utf-8') as f:
    f.write('import React from \"react\";\nexport default function Sidebar({ appState, setAppState, setView, switchTab }) {\n return (\n' + html_to_jsx(str(sidebar)) + '\n);\n}')

tabs = soup.find_all('div', id=re.compile(r'^tab-'))
for tab in tabs:
    tab_id = tab['id']
    comp_name = ''.join(word.capitalize() for word in tab_id.split('-')[1:]) + 'Tab'
    dir_name = 'StudentDashboard' if 'student' in tab_id else 'AdminDashboard'
    
    with open(os.path.join(out_dir, f'pages/{dir_name}/{comp_name}.jsx'), 'w', encoding='utf-8') as f:
        f.write(f'import React from \"react\";\nexport default function {comp_name}({{ appState, setAppState }}) {{\n return (\n' + html_to_jsx(str(tab)) + '\n);\n}')

# create dashboard shell
with open(os.path.join(out_dir, 'components/layout/DashboardShell.jsx'), 'w', encoding='utf-8') as f:
    f.write('import React from \"react\";\nimport Sidebar from \"./Sidebar\";\nexport default function DashboardShell({ appState, setAppState, setView, children }) {\n return (\n' + html_to_jsx(str(dash_shell)).replace('{/*  Sidebar will go here  */}', '<Sidebar appState={appState} setAppState={setAppState} setView={setView} switchTab={() => {}} />\n{children}') + '\n);\n}')

