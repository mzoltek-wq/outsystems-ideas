from reportlab.lib import colors
from reportlab.lib.pagesizes import landscape
from reportlab.lib.styles import ParagraphStyle
from reportlab.platypus import Paragraph
from reportlab.pdfgen import canvas
from reportlab.pdfbase.pdfmetrics import stringWidth
from reportlab.lib.utils import ImageReader

OUTPUT = "/Users/michaelzoltek/Documents/Codex/2026-07-12/l/outputs/build-it-live-one-pager.pdf"

PAGE_W = 960
PAGE_H = 540


def hex_color(value):
    value = value.lstrip("#")
    return colors.Color(
        int(value[0:2], 16) / 255,
        int(value[2:4], 16) / 255,
        int(value[4:6], 16) / 255,
    )


C = {
    "paper": hex_color("#FAFAFA"),
    "ink": hex_color("#171514"),
    "muted": hex_color("#5F5A55"),
    "line": hex_color("#DAD4CF"),
    "line_dark": hex_color("#B8ADA6"),
    "red": hex_color("#DA291C"),
    "red_dark": hex_color("#8F1F18"),
    "red_soft": hex_color("#FDE9E7"),
    "black": hex_color("#111111"),
    "panel": hex_color("#1C1B1A"),
    "panel_2": hex_color("#2B2726"),
    "white": colors.white,
    "teal": hex_color("#0E7C7B"),
    "gold": hex_color("#D99A22"),
    "blue": hex_color("#355C7D"),
    "green": hex_color("#4B7F52"),
    "purple": hex_color("#6D4C8D"),
    "soft_text": hex_color("#EEE3DE"),
}


def style(name, font_size=12, color=C["ink"], leading=None, bold=False, align=0):
    return ParagraphStyle(
        name=name,
        fontName="Helvetica-Bold" if bold else "Helvetica",
        fontSize=font_size,
        leading=leading or font_size * 1.18,
        textColor=color,
        alignment=align,
        spaceAfter=0,
    )


def ptext(c, text, x, y, w, h, font_size=12, color=C["ink"], bold=False, align=0, leading=None):
    para = Paragraph(text, style("s", font_size, color, leading, bold, align))
    para.wrapOn(c, w, h)
    para.drawOn(c, x, y + h - para.height)


def rounded(c, x, y, w, h, fill, stroke=None, radius=10, width=1):
    c.setFillColor(fill)
    c.setStrokeColor(stroke or fill)
    c.setLineWidth(width)
    c.roundRect(x, y, w, h, radius, stroke=1 if stroke else 0, fill=1)


def line(c, x1, y1, x2, y2, color=C["line_dark"], width=1.2):
    c.setStrokeColor(color)
    c.setLineWidth(width)
    c.line(x1, y1, x2, y2)


def arrow(c, x1, y1, x2, y2, color=C["red"], width=2.4):
    line(c, x1, y1, x2, y2, color, width)
    # simple right-pointing arrowhead
    c.setFillColor(color)
    c.setStrokeColor(color)
    c.line(x2, y2, x2 - 8, y2 + 5)
    c.line(x2, y2, x2 - 8, y2 - 5)


def dot(c, x, y, r, fill):
    c.setFillColor(fill)
    c.setStrokeColor(fill)
    c.circle(x, y, r, stroke=0, fill=1)


def source_card(c, label, x, y, w, accent):
    rounded(c, x, y, w, 33, C["white"], C["line"], radius=8)
    dot(c, x + 17, y + 16.5, 4, accent)
    para = Paragraph(label, style("source-card-label", 11.5, C["ink"], bold=True))
    text_w = w - 42
    text_h = 28
    para.wrapOn(c, text_w, text_h)
    para.drawOn(c, x + 30, y + (33 - para.height) / 2)


def process_step(c, number, title, detail, x, y, w, accent):
    row_h = 30
    rounded(c, x, y, w, row_h, C["panel_2"], hex_color("#3A3431"), radius=7, width=0.4)
    dot(c, x + 18, y + row_h / 2, 10.5, accent)
    ptext(c, str(number), x + 10.5, y + row_h / 2 - 6.7, 15, 13, 9.8, C["white"], True, align=1)
    ptext(c, title, x + 38, y + 14.5, w - 48, 14, 11.2, C["white"], True)
    ptext(c, detail, x + 38, y + 3.5, w - 48, 12, 7.9, C["soft_text"], leading=8.7)


def output_card(c, title, detail, x, y, w, accent):
    rounded(c, x, y, w, 49, C["white"], C["line"], radius=8)
    c.setFillColor(accent)
    c.rect(x, y, 5, 49, stroke=0, fill=1)
    ptext(c, title, x + 17, y + 27, w - 26, 18, 12.5, C["ink"], True)
    ptext(c, detail, x + 17, y + 8, w - 26, 18, 9.2, C["muted"])


def draw_ring_logo(c, x, y, size):
    c.setFillColor(C["red"])
    c.circle(x + size / 2, y + size / 2, size / 2, stroke=0, fill=1)
    c.setFillColor(C["paper"])
    c.circle(x + size / 2, y + size / 2, size * 0.22, stroke=0, fill=1)


def draw_loop_icon(c, x, y, size):
    c.setStrokeColor(C["red"])
    c.setLineWidth(1.7)
    c.arc(x, y, x + size, y + size, 35, 250)
    c.arc(x + 4, y + 3, x + size + 4, y + size + 3, 215, 250)
    c.setFillColor(C["red"])
    c.setStrokeColor(C["red"])
    c.line(x + size * 0.84, y + size * 0.76, x + size * 0.69, y + size * 0.78)
    c.line(x + size * 0.84, y + size * 0.76, x + size * 0.79, y + size * 0.62)
    c.line(x + size * 0.18, y + size * 0.21, x + size * 0.33, y + size * 0.20)
    c.line(x + size * 0.18, y + size * 0.21, x + size * 0.23, y + size * 0.35)


def build():
    c = canvas.Canvas(OUTPUT, pagesize=(PAGE_W, PAGE_H))
    c.setTitle("Build It Live One-Pager")
    c.setAuthor("Codex")
    c.setFillColor(C["paper"])
    c.rect(0, 0, PAGE_W, PAGE_H, stroke=0, fill=1)

    # Header
    c.setFillColor(C["red"])
    c.rect(0, 0, 10, PAGE_H, stroke=0, fill=1)
    draw_ring_logo(c, 365, 470, 30)
    ptext(c, "Build It Live", 0, 473, PAGE_W, 32, 26, C["ink"], True, align=1)
    ptext(
        c,
        "A submission-driven engine that turns real platform questions into reusable OutSystems proof and assets.",
        165,
        440,
        630,
        30,
        13.5,
        C["muted"],
        align=1,
    )

    # Column headings
    ptext(c, "Idea sources", 48, 405, 180, 22, 18, C["ink"], True)
    ptext(c, "What fuels the content engine", 48, 384, 190, 18, 10.5, C["muted"])

    ptext(c, "Submission process", 302, 405, 360, 22, 18, C["ink"], True, align=1)
    ptext(
        c,
        "We collect use cases, integrations, AI processes, industry information and aggregate those into episodes.",
        302,
        374,
        360,
        28,
        9.6,
        C["muted"],
        align=1,
        leading=10.8,
    )

    ptext(c, "Output from Content", 718, 405, 205, 22, 18, C["ink"], True)
    ptext(c, "Where each build compounds", 718, 384, 190, 18, 10.5, C["muted"])

    # Left inputs
    left_x = 48
    left_y = 147
    left_w = 205
    inputs = [
        ("Internal/Community asks", C["red"]),
        ("Customer use cases", C["teal"]),
        ("Partner ideas", C["gold"]),
        ("Sales and field questions", C["blue"]),
        ("New Product Features", C["purple"]),
        ("Fun Relevant Ideas", C["green"]),
    ]
    for idx, (label, accent) in enumerate(inputs):
        source_card(c, label, left_x, left_y + (5 - idx) * 40, left_w, accent)

    # Center engine
    center_x = 302
    center_y = 92
    center_w = 360
    center_h = 266
    rounded(c, center_x, center_y, center_w, center_h, C["panel"], None, radius=18)
    c.setFillColor(C["red"])
    c.rect(center_x, center_y + center_h - 7, center_w, 7, stroke=0, fill=1)
    ptext(c, "Submission Engine", center_x + 28, center_y + 222, center_w - 56, 26, 19.5, C["white"], True, align=1)
    ptext(
        c,
        "Creating the assets from the ideas.",
        center_x + 40,
        center_y + 202,
        center_w - 80,
        18,
        11,
        C["soft_text"],
        align=1,
    )

    step_x = center_x + 36
    step_w = center_w - 72
    steps = [
        ("Submit", "Capture idea, use case, industry, integrations, AI layers.", C["red"]),
        ("Review", "Triage, organize requests, assess outcomes.", C["teal"]),
        ("Group", "Cluster similar asks into episode themes.", C["gold"]),
        ("Plan", "Create episode script, align resources, plan advertising and release dates.", C["blue"]),
        ("Create", "Film episode, create assets, shorts, clips, marketing posts.", C["purple"]),
        ("Release", "Post to socials/repos.", C["green"]),
    ]
    for i, (title, detail, accent) in enumerate(steps, start=1):
        y = center_y + 163 - (i - 1) * 31
        process_step(c, i, title, detail, step_x, y, step_w, accent)

    # Connectors
    arrow(c, left_x + left_w + 16, 285, center_x - 12, 285, C["red"], 2.2)
    rounded(c, 257, 298, 42, 14, C["paper"], C["red"], radius=7, width=0.6)
    ptext(c, "Requests", 260, 302, 36, 7, 7.2, C["red_dark"], True, align=1)
    arrow(c, center_x + center_w + 10, 285, 710, 285, C["red"], 2.2)
    rounded(c, 676, 298, 38, 14, C["paper"], C["red"], radius=7, width=0.6)
    ptext(c, "Assets", 681, 302, 28, 7, 7.2, C["red_dark"], True, align=1)

    # Right output branch cards
    right_x = 732
    right_w = 184
    outputs = [
        ("Content", "YouTube episodes, Shorts, TikTok, LinkedIn posts", C["red"]),
        ("Developer resources", "GitHub repos, OML files, READMEs, docs", C["teal"]),
        ("Forge and community", "Reusable apps, components, starters, examples", C["gold"]),
        ("Internal enablement", "Demo scripts, training clips, field-ready examples", C["blue"]),
        ("Launch support", "Feature companion builds and controlled previews", C["purple"]),
        ("Insights", "Demand signals, topic clusters, high-interest use cases", C["green"]),
    ]
    output_ys = [333, 277, 221, 165, 109, 53]
    trunk_x = 720
    line(c, trunk_x, 77, trunk_x, 357, C["line_dark"], 1.2)
    for (title, detail, accent), y in zip(outputs, output_ys):
        line(c, trunk_x, y + 24, right_x - 7, y + 24, C["line_dark"], 1.1)
        output_card(c, title, detail, right_x, y, right_w, accent)

    # Bottom feedback loop
    loop_x = 252
    loop_y = 30
    loop_w = 456
    loop_h = 50
    rounded(c, loop_x, loop_y, loop_w, loop_h, C["white"], C["line"], radius=13)
    draw_loop_icon(c, loop_x + 22, loop_y + 14, 22)
    c.setFont("Helvetica-Bold", 11)
    c.setFillColor(C["red_dark"])
    c.drawCentredString(loop_x + loop_w / 2 + 18, loop_y + 34, "Reusable growth loop")
    ptext(
        c,
        "Each idea and episode feeds the engine, fuels AEO and marketing interest, and grows reusable proof, clips, repos, and enablement assets.",
        loop_x + 78,
        loop_y + 9,
        336,
        20,
        7.4,
        C["muted"],
        align=1,
        leading=8.1,
    )

    # One-line takeaway
    rounded(c, 48, 102, 205, 33, C["red_soft"], C["red"], radius=10)
    ptext(c, "Every idea becomes a usable asset", 56, 112, 189, 14, 9.8, C["red_dark"], True, align=1)

    c.showPage()
    c.save()


if __name__ == "__main__":
    build()
