from pathlib import Path

path = Path("index.html")
text = path.read_text(encoding="utf-8")


def take(src, start, end):
    start_at = src.index(start)
    end_at = src.index(end, start_at)
    return src[start_at:end_at], src[:start_at] + src[end_at:]


metrics, text = take(
    text,
    "    <!-- ==========================================================================\n         Engineering Metrics Section",
    "    <!-- ==========================================================================\n         Professional Experience Section",
)
skills, text = take(
    text,
    "    <!-- ==========================================================================\n         Skills Section",
    "    <!-- ==========================================================================\n         Education Section",
)

experience = "    <!-- ==========================================================================\n         Professional Experience Section"
education = "    <!-- ==========================================================================\n         Education Section"
text = text.replace(experience, skills + experience, 1)
text = text.replace(education, metrics + education, 1)

path.write_text(text, encoding="utf-8")
print(text.index('id="skills"') < text.index('id="experience"') < text.index('id="projects"') < text.index('id="architecture"') < text.index('id="metrics"') < text.index('id="education"'))
