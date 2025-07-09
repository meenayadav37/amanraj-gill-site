import streamlit as st
import streamlit.components.v1 as components

st.set_page_config(page_title="Amanraj Gill Fan Site", layout="wide")

# Load all external files
def read_file(file_path):
    with open(file_path, "r", encoding="utf-8") as f:
        return f.read()

html_content = read_file("index3.html")
css_content = read_file("style3.css")
js_content = read_file("script3.js")

# Merge everything into final HTML
final_html = f"""
<style>
{css_content}
</style>

{html_content}

<script>
{js_content}
</script>
"""

# Render in Streamlit
components.html(final_html, height=2200, scrolling=True)
