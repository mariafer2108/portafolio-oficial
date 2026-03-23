from reportlab.pdfgen import canvas
from reportlab.lib.pagesizes import letter
from reportlab.lib.utils import ImageReader
import os

c = canvas.Canvas('revista_surf.pdf', pagesize=letter)
width, height = letter

imagenes = ['img/surf.png', 'img/1.PNG', 'img/2.PNG', 'img/3.PNG', 'img/4.PNG', 'img/5.PNG', 'img/6.PNG']

for idx, img_path in enumerate(imagenes, 1):
    if os.path.exists(img_path):
        try:
            img = ImageReader(img_path)
            img_width, img_height = img.getSize()
            aspect = img_height / float(img_width)
            new_width = width - 2*36
            new_height = new_width * aspect
            y_pos = height - new_height - 72
            c.drawImage(img, 36, y_pos, new_width, new_height)
        except Exception as e:
            c.setFont('Helvetica', 12)
            c.drawString(100, height - 100, f'Error: {img_path}')
    
    if idx < len(imagenes):
        c.showPage()

c.save()
print('PDF with 7 pages created')
