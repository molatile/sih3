with open('D:/ai man/sih3/tribal-scholarship-portal.html', 'r', encoding='utf-8') as f:
    content = f.read()

content = content.replace('class="p-3', 'class="p-4')
# But wait, there is <div class="bg-white p-3 rounded-lg and gap-3. 
# We should target 	d class="p-3" and similar table things, or just replace class="p-3" since it was specifically for padding in tables, but there are others.
# Let's replace 'class="p-3 ' and 'class="p-3"' if they are in td.
import re
content = re.sub(r'<td class="p-3', r'<td class="p-4', content)

with open('D:/ai man/sih3/tribal-scholarship-portal.html', 'w', encoding='utf-8') as f:
    f.write(content)
print('Done')
