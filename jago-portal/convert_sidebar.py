import os
import re
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
    
    html = re.sub(r'<(img|input|br|hr)([^>]*?)(?<!/)>', r'<\1\2 />', html)
    
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
    html = re.sub(r'<!--(.*?)-->', r'{/* \1 */}', html)
    
    return html

soup = BeautifulSoup(content, 'html.parser')
sidebar = soup.find(id='sidebar')

with open(os.path.join(out_dir, 'components/layout/Sidebar.jsx'), 'w', encoding='utf-8') as f:
    f.write('import React from \"react\";\nexport default function Sidebar({ appState, setAppState, setView, switchTab }) {\n return (\n' + html_to_jsx(str(sidebar)) + '\n);\n}')

