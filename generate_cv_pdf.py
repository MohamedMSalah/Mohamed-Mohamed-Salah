import os
from reportlab.lib.pagesizes import letter
from reportlab.lib import colors
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, HRFlowable, Table, TableStyle
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle

def create_pdf(output_path):
    # Standard margins to comfortably fit exactly on 1 page
    doc = SimpleDocTemplate(
        output_path,
        pagesize=letter,
        leftMargin=36,
        rightMargin=36,
        topMargin=28,
        bottomMargin=28
    )

    styles = getSampleStyleSheet()
    
    title_style = ParagraphStyle(
        'Name',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=18,
        leading=21,
        textColor=colors.HexColor('#000000'),
        alignment=0 # Left
    )

    subtitle_style = ParagraphStyle(
        'Subtitle',
        parent=styles['Normal'],
        fontName='Helvetica-Oblique',
        fontSize=10,
        leading=13,
        textColor=colors.HexColor('#1e293b'),
        alignment=0
    )

    contact_style = ParagraphStyle(
        'Contact',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=8.5,
        leading=11.5,
        textColor=colors.HexColor('#334155'),
        alignment=0
    )

    section_heading = ParagraphStyle(
        'SectionHeading',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=10,
        leading=12,
        textColor=colors.HexColor('#000000'),
        spaceBefore=5,
        spaceAfter=1,
        textTransform='uppercase'
    )

    body_bold = ParagraphStyle(
        'BodyBold',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=8.5,
        leading=11,
        textColor=colors.HexColor('#0f172a')
    )

    body_meta = ParagraphStyle(
        'BodyMeta',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=8.5,
        leading=11,
        textColor=colors.HexColor('#0f172a'),
        alignment=2 # Right
    )

    body_text = ParagraphStyle(
        'BodyTextCustom',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=8,
        leading=10.5,
        textColor=colors.HexColor('#1e293b')
    )

    bullet_style = ParagraphStyle(
        'BulletCustom',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=8,
        leading=10.2,
        textColor=colors.HexColor('#1e293b'),
        leftIndent=10,
        firstLineIndent=-10,
        spaceBefore=1
    )

    story = []

    # Header
    story.append(Paragraph("MOHAMED MOHAMED SALAH", title_style))
    story.append(Spacer(1, 2))
    story.append(Paragraph("<i>SoftwareEngineer | MobileFullStackDeveloper</i>", subtitle_style))
    story.append(Spacer(1, 3))
    
    portfolio_url = "https://mohamedmsalah.github.io/Mohamed-Mohamed-Salah/"
    contact_text = f'Giza, Egypt &nbsp;|&nbsp; <a href="mailto:m0hamed724@outlook.com"><u>m0hamed724@outlook.com</u></a> &nbsp;|&nbsp; <a href="tel:+201552257207"><u>+201552257207</u></a> &nbsp;|&nbsp; <a href="https://www.linkedin.com/in/mohamed-mohamed-salah"><u>LinkedIn</u></a> &nbsp;|&nbsp; <a href="https://github.com/MohamedMSalah"><u>GitHub</u></a> &nbsp;|&nbsp; <a href="{portfolio_url}"><u>portfolio</u></a>'
    story.append(Paragraph(contact_text, contact_style))
    story.append(Spacer(1, 3))

    def add_section_header(title):
        story.append(Paragraph(title, section_heading))
        story.append(HRFlowable(width="100%", thickness=0.75, color=colors.HexColor('#000000'), spaceBefore=1, spaceAfter=3))

    # Summary
    add_section_header("SUMMARY")
    summary_text = "Software Engineer with hands-on experience building cross-platform mobile applications and backend services using Flutter, Dart, .NET, C#, Node.js, and SQL. Experienced in designing RESTful APIs, relational database schemas, and maintainable application architectures using Clean Architecture and SOLID principles. Skilled in integrating Firebase services and developing end-to-end software solutions, from implementation and testing to deployment. Seeking a Software Engineer role focused on mobile development, backend engineering, or full-stack mobile applications."
    story.append(Paragraph(summary_text, body_text))

    # Education
    add_section_header("EDUCATION")
    story.append(Paragraph("<b>B.Sc. in Computer Science, Misr University for Science & Technology | 2020 - 2024</b>", body_bold))
    story.append(Paragraph("• <b>Grade:</b> Very Good", bullet_style))

    # Experience
    add_section_header("EXPERIENCE")
    exp_table_1 = Table([
        [
            Paragraph("<b>Software Engineer | LevAI (formerly Diven-AI)</b>", body_bold),
            Paragraph("Jul 2026 – Present", body_meta)
        ]
    ], colWidths=[380, 160])
    exp_table_1.setStyle(TableStyle([('VALIGN', (0,0), (-1,-1), 'TOP'), ('BOTTOMPADDING', (0,0), (-1,-1), 0), ('TOPPADDING', (0,0), (-1,-1), 0), ('LEFTPADDING', (0,0), (-1,-1), 0), ('RIGHTPADDING', (0,0), (-1,-1), 0)]))
    story.append(exp_table_1)
    story.append(Paragraph("• Developed cross-platform mobile applications using Flutter and React Native, delivering maintainable and responsive user experiences.", bullet_style))
    story.append(Paragraph("• Designed system architectures and database schemas, and developed RESTful APIs using Node.js and ASP.NET Core, applying Clean Architecture and system design principles, including caching, CDN, and rate limiting.", bullet_style))

    story.append(Spacer(1, 2))
    exp_table_2 = Table([
        [
            Paragraph("<b>Full Stack Developer | (.NET & Flutter), DivenAI</b>", body_bold),
            Paragraph("Jul 2024 – Jul 2025", body_meta)
        ]
    ], colWidths=[380, 160])
    exp_table_2.setStyle(TableStyle([('VALIGN', (0,0), (-1,-1), 'TOP'), ('BOTTOMPADDING', (0,0), (-1,-1), 0), ('TOPPADDING', (0,0), (-1,-1), 0), ('LEFTPADDING', (0,0), (-1,-1), 0), ('RIGHTPADDING', (0,0), (-1,-1), 0)]))
    story.append(exp_table_2)
    story.append(Paragraph("• Developed cross-platform iOS and Android healthcare applications using Flutter and Dart, applying BLoC, Riverpod, and Provider for state management.", bullet_style))
    story.append(Paragraph("• Built backend services with ASP.NET Core and designed normalized SQL Server databases, optimizing Entity Framework Core queries for improved API performance.", bullet_style))
    story.append(Paragraph("• Implemented secure authentication and role-based access control using OAuth 2.0, JWT, and RBAC, and integrated mapping, and push-notification services.", bullet_style))
    story.append(Paragraph("• Improved software quality, automated CI/CD pipelines, and unit testing using Flutter Test and Mockito.", bullet_style))

    # Projects
    add_section_header("PROJECTS")
    
    # Project 1: Yalla 5roga
    p1_title = '<b><u>Yalla 5roga</u> — Group Outing Planning Application | Flutter · Node.js · PostgreSQL · Firebase | <a href="https://github.com/MohamedMSalah/yalla5roga"><u>[GitHub]</u></a></b>'
    story.append(Paragraph(p1_title, body_bold))
    story.append(Paragraph("• Developed a group outing application that allows users to create groups, plan outings, suggest destinations, and vote on proposed plans.", bullet_style))
    story.append(Paragraph("• Built the Flutter application using Clean Architecture, Provider state management, and a repository-based structure.", bullet_style))
    story.append(Paragraph("• Designed the PostgreSQL database schema and implemented backend REST APIs using Node.js and Express.js to manage groups, outings, voting, and chat, with Firebase Authentication for secure user identity verification.", bullet_style))

    # Project 2: CMS
    story.append(Spacer(1, 2))
    p2_table = Table([
        [
            Paragraph("<b>CMS — Clinic Management System | Flutter · .NET · MySQL | [DivenAI]</b>", body_bold),
            Paragraph("May 2025 – Jul 2025", body_meta)
        ]
    ], colWidths=[400, 140])
    p2_table.setStyle(TableStyle([('VALIGN', (0,0), (-1,-1), 'TOP'), ('BOTTOMPADDING', (0,0), (-1,-1), 0), ('TOPPADDING', (0,0), (-1,-1), 0), ('LEFTPADDING', (0,0), (-1,-1), 0), ('RIGHTPADDING', (0,0), (-1,-1), 0)]))
    story.append(p2_table)
    story.append(Paragraph("• Designed the complete relational database from scratch, implementing <b>15+ SQL tables</b> with PK/FK relationships.", bullet_style))
    story.append(Paragraph("• Developed the flutter frontend and .NET backend, implementing role-based workflows across 3 user roles (Patients, Doctors, Admins), securing 100% of sensitive medical records and clinical endpoints against unauthorized access.", bullet_style))
    story.append(Paragraph("• Built and integrated 10+ RESTful API endpoints for authentication, doctor management, appointment booking, and medical records, validated via swagger with zero critical bugs.", bullet_style))

    # Project 3: Alarmus
    story.append(Spacer(1, 2))
    p3_table = Table([
        [
            Paragraph("<b>Alarmus — Real-time Alarm based Collaborative Alarms | Flutter · .NET | [DivenAI]</b>", body_bold),
            Paragraph("Jan 2025 – Feb 2025", body_meta)
        ]
    ], colWidths=[400, 140])
    p3_table.setStyle(TableStyle([('VALIGN', (0,0), (-1,-1), 'TOP'), ('BOTTOMPADDING', (0,0), (-1,-1), 0), ('TOPPADDING', (0,0), (-1,-1), 0), ('LEFTPADDING', (0,0), (-1,-1), 0), ('RIGHTPADDING', (0,0), (-1,-1), 0)]))
    story.append(p3_table)
    story.append(Paragraph("• Built a real-time, notification-based alarm app supporting group creation and member management, reducing missed coordination events by 40%.", bullet_style))
    story.append(Paragraph("• Enabled group owners/moderators to trigger simultaneous notifications across all group members (tested with groups of up to 10+), cutting manual coordination time.", bullet_style))
    story.append(Paragraph("• Integrated Flutter frontend with a .NET backend via 10+ Swagger-documented endpoints for streamlined communication.", bullet_style))

    # Project 4: Manetho
    story.append(Spacer(1, 2))
    p4_table = Table([
        [
            Paragraph("<b>Manetho — Hieroglyphic translation app | Flutter [Graduation project]</b>", body_bold),
            Paragraph("May 2024 – Jun 2024", body_meta)
        ]
    ], colWidths=[400, 140])
    p4_table.setStyle(TableStyle([('VALIGN', (0,0), (-1,-1), 'TOP'), ('BOTTOMPADDING', (0,0), (-1,-1), 0), ('TOPPADDING', (0,0), (-1,-1), 0), ('LEFTPADDING', (0,0), (-1,-1), 0), ('RIGHTPADDING', (0,0), (-1,-1), 0)]))
    story.append(p4_table)
    story.append(Paragraph("• <b>Achievement:</b> Awarded 2nd Place Overall in a university-wide graduation project evaluation conducted under ITI supervision across Computer Science and Engineering faculties.", bullet_style))
    story.append(Paragraph("• Developed an AI-powered mobile app that translates ancient Egyptian hieroglyphs into readable text by integrating computer vision and NLP models, achieving 80% recognition accuracy with responses under 10 seconds.", bullet_style))

    # Skills
    add_section_header("SKILLS")
    story.append(Paragraph("• <b>Programming Languages:</b> Dart, JavaScript, TypeScript, Java, C#, C++, SQL", bullet_style))
    story.append(Paragraph("• <b>Frontend & Mobile:</b> Flutter, Provider, Riverpod, BLoC, React, Responsive UI", bullet_style))
    story.append(Paragraph("• <b>Design Backend & APIs:</b> ASP.NET Core, RESTful APIs, GraphQL, Microservices, Node.js Databases: SQL Server, PostgreSQL, Firebase", bullet_style))
    story.append(Paragraph("• <b>DevOps & Cloud:</b> Azure, AWS, Docker, CI/CD, Git, GitHub Actions", bullet_style))
    story.append(Paragraph("• <b>Security:</b> JWT, OAuth 2.0, Identity Server, RBAC", bullet_style))

    doc.build(story)
    print("CV Generated successfully at:", output_path)

if __name__ == "__main__":
    os.makedirs("assets", exist_ok=True)
    create_pdf("assets/Software Engineer - FullStack Mobile app developer2026.pdf")
