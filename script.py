import re

with open('D:/ai man/sih3/tribal-scholarship-portal.html', 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Add font-size: 16px and zoom: 1 on body 
# ensure base font is never below 16px -> already doing this via style text-base
content = content.replace(
    '<body class="antialiased h-screen flex flex-col overflow-hidden">',
    '<body class="antialiased h-screen flex flex-col overflow-hidden text-base" style="font-size: 16px; zoom: 1;">'
)

# 2. All main content containers: max-w-4xl / max-w-6xl -> max-w-full px-6
content = content.replace('max-w-4xl', 'max-w-full px-6')
content = content.replace('max-w-6xl', 'max-w-full px-6')

# 3. Sidebar width: w-64 -> w-72
content = content.replace('<aside id="sidebar" class="bg-white w-64', '<aside id="sidebar" class="bg-white w-72')

# 4. All card padding: bump from p-4/p-5 to p-6/p-8
# Be specific about background whites and roundings typical of cards
content = content.replace('bg-white p-4 rounded', 'bg-white p-6 rounded')
content = content.replace('bg-white p-5 rounded', 'bg-white p-8 rounded')
content = content.replace('bg-white rounded-lg shadow-sm border border-gray-100 p-4', 'bg-white rounded-lg shadow-sm border border-gray-100 p-6')
content = content.replace('bg-white rounded-lg shadow-sm border border-gray-100 p-6 ', 'bg-white rounded-lg shadow-sm border border-gray-100 p-8 ')
# Also on line 163 there is: bg-white rounded-lg shadow border border-gray-100 p-6 md:p-8
content = content.replace('bg-white rounded-lg shadow border border-gray-100 p-6 md:p-8', 'bg-white rounded-lg shadow border border-gray-100 p-8 md:p-10')

# login section card
content = content.replace('bg-white p-8 rounded-lg', 'bg-white p-8 rounded-lg') # p-8 already, let's leave or bump? It doesn't say p-8 to anything.

# 5. Table cells: bump p-3 to p-4, font from text-sm to text-base
content = content.replace('class="p-3"', 'class="p-4"')
content = content.replace('w-full text-left text-sm whitespace-nowrap', 'w-full text-left text-base whitespace-nowrap')

# 6. Dashboard header title: bump to text-2xl
content = content.replace('class="text-xl font-bold text-gray-800" id="dashboard-title"', 'class="text-2xl font-bold text-gray-800" id="dashboard-title"')

# 7. Stat counter numbers on landing: bump to text-5xl font-black
content = content.replace('text-4xl font-bold text-mota-green', 'text-5xl font-black text-mota-green')

# 8. Hero heading: ensure it's text-5xl lg:text-6xl
content = content.replace('text-4xl lg:text-5xl font-bold', 'text-5xl lg:text-6xl font-bold')

# 9. Sidebar nav buttons: bump from text-sm py-3 to text-base py-4
content = content.replace('px-4 py-3 text-sm rounded-md', 'px-4 py-4 text-base rounded-md')

# 10. All form inputs and labels: bump to text-base, input padding px-4 py-3
content = content.replace('class="block text-sm', 'class="block text-base')
# Replace p-2 with px-4 py-3 on inputs and selects
content = re.sub(r'<(input|select)([^>]+)class="([^"]*?)p-2([^"]*?)"', r'<\1\2class="\3px-4 py-3\4"', content)
# Check for inputs that might have padding elsewhere? 
# "px-4 py-2" in login id input
content = content.replace('px-4 py-2 focus:ring-2', 'px-4 py-3 focus:ring-2')

# 11. In the <style> block add: * { box-sizing: border-box; } html { font-size: 16px; } .main-content { min-width: 0; width: 100%; }
style_addition = '''
        * { box-sizing: border-box; }
        html { font-size: 16px; }
        .main-content { min-width: 0; width: 100%; }
'''
content = content.replace('</style>', style_addition + '    </style>')

# 12. The view-dashboard-shell main area: add w-full min-h-screen and ensure flex-1 is working
content = content.replace('<main class="flex-1 overflow-y-auto bg-gray-50 p-4 md:p-8 relative">', '<main class="main-content flex-1 w-full min-h-screen overflow-y-auto bg-gray-50 p-4 md:p-8 relative">')

with open('D:/ai man/sih3/tribal-scholarship-portal.html', 'w', encoding='utf-8') as f:
    f.write(content)

print("Done")
