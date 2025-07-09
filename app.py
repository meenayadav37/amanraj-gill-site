import streamlit as st
import streamlit.components.v1 as components
import os

# Set wide layout
st.set_page_config(layout="wide")

# Load your HTML file
def load_html():
    with open("index3.html", "r", encoding="utf-8") as f:
        return f.read()

# Inject CSS and JS for correct styling
def local_file_to_url(file_path):
    return f'<link rel="stylesheet" type="text/css" href="{file_path}">' if file_path.endswith('.css') else \
           f'<script src="{file_path}"></script>'

# Load HTML
html_content = load_html()

# Embed style3.css and script3.js
css_link = local_file_to_url("style3.css")
js_link = local_file_to_url("script3.js")

# Wrap everything together
full_page = f"""
{css_link}
{html_content}
{js_link}
"""

# Render in Streamlit (adjust height as needed)
components.html(full_page, height=2000, scrolling=True)
