import os
from reportlab.lib.pagesizes import letter
from reportlab.lib import colors
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, HRFlowable, Table, TableStyle
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.units import inch

def create_pdf(output_path):
    doc = SimpleDocTemplate(
        output_path,
        pagesize=letter,
        leftMargin=36,
        rightMargin=36,
        topMargin=36,
        bottomMargin=36
    )

    styles = getSampleStyleSheet()
    
    title_style = ParagraphStyle(
        'Name',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=20,
        leading=24,
        textColor=colors.HexColor('#0f172a'),
        alignment=1 # Center
    )

    subtitle_style = ParagraphStyle(
        'Subtitle',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=11,
        leading=15,
        textColor=colors.HexColor('#0284c7'),
        alignment=1
    )

    contact_style = ParagraphStyle(
        'Contact',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=9,
        leading=13,
        textColor=colors.HexColor('#475569'),
        alignment=1
    )

    section_heading = ParagraphStyle(
        'SectionHeading',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=11,
        leading=14,
        textColor=colors.HexColor('#0f172a'),
        spaceBefore=8,
        spaceAfter=3,
        textTransform='uppercase'
    )

    body_bold = ParagraphStyle(
        'BodyBold',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=9.5,
        leading=13,
        textColor=colors.HexColor('#0f172a')
    )

    body_meta = ParagraphStyle(
        'BodyMeta',
        parent=styles['Normal'],
        fontName='Helvetica-Oblique',
        fontSize=8.5,
        leading=12,
        textColor=colors.HexColor('#64748b'),
        alignment=2 # Right
    )

    body_text = ParagraphStyle(
        'BodyTextCustom',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=8.5,
        leading=12,
        textColor=colors.HexColor('#334155')
    )

    bullet_style = ParagraphStyle(
        'BulletCustom',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=8.5,
        leading=11.5,
        textColor=colors.HexColor('#334155'),
        leftIndent=12,
        firstLineIndent=-12,
        spaceBefore=1.5
    )

    story = []

    # Header
    story.append(Paragraph("MOHAMED MOHAMED SALAH", title_style))
    story.append(Spacer(1, 2))
    story.append(Paragraph("Software Engineer | Mobile Full Stack Developer", subtitle_style))
    story.append(Spacer(1, 4))
    
    contact_text = 'Giza, Egypt &nbsp;|&nbsp; <a href="mailto:m0hamed724@outlook.com"><u>m0hamed724@outlook.com</u></a> &nbsp;|&nbsp; +201552257207 &nbsp;|&nbsp; <a href="https://www.linkedin.com/in/mohamed-mohamed-salah"><u>LinkedIn</u></a> &nbsp;|&nbsp; <a href="https://github.com/MohamedMSalah"><u>GitHub</u></a>'
    story.append(Paragraph(contact_text, contact_style))
    story.append(Spacer(1, 6))

    def add_section_header(title):
        story.append(Paragraph(title, section_heading))
        story.append(HRFlowable(width="100%", thickness=0.75, color=colors.HexColor('#cbd5e1'), spaceBefore=1, spaceAfter=4))

    # Summary
    add_section_header("Summary")
    story.append(Paragraph("Innovative Full Stack Developer with 1+ year of experience specializing in cross-platform mobile and scalable web applications. Developed and deployed iOS and Android applications, enhancing functionality and reliability through state-of-the-art practices, such as integrating diverse APIs and configuring CI/CD pipelines.", body_text))

    # Education
    add_section_header("Education")
    edu_table = Table([
        [
            Paragraph("<b>Bachelor of Science in Computer Science</b>, Misr University for Science & Technology", body_bold),
            Paragraph("2020 – 2024 | Giza, Egypt", body_meta)
        ]
    ], colWidths=[400, 140])
    edu_table.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('BOTTOMPADDING', (0,0), (-1,-1), 0),
        ('TOPPADDING', (0,0), (-1,-1), 0),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0)
    ]))
    story.append(edu_table)
    story.append(Paragraph("• <b>Graduation Grade:</b> Very Good", bullet_style))
    story.append(Paragraph("• <b>Graduation Project Award:</b> 2nd Place Overall in ITI (Information Technology Institute) Supervised Evaluation across all CS and Engineering graduation projects.", bullet_style))

    # Experience
    add_section_header("Experience")
    exp_table = Table([
        [
            Paragraph("<b>Full Stack Mobile Developer</b>, Lev AI (formerly Diven-AI) — Part-time", body_bold),
            Paragraph("07/2026 – Present", body_meta)
        ]
    ], colWidths=[380, 160])
    exp_table.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('BOTTOMPADDING', (0,0), (-1,-1), 0),
        ('TOPPADDING', (0,0), (-1,-1), 0),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0)
    ]))
    story.append(exp_table)
    story.append(Paragraph("• Developed cross-platform mobile applications with Flutter and Dart, and expanded into React Native, Node.js, and PostgreSQL projects.", bullet_style))
    story.append(Paragraph("• Built RESTful APIs, worked with SQL and PostgreSQL, integrated Firebase, and applied Clean Architecture, Provider, Repository Pattern, and SOLID principles while supporting interns and junior developers.", bullet_style))

    story.append(Spacer(1, 4))
    exp_table_service = Table([
        [
            Paragraph("<b>Military Service</b>", body_bold),
            Paragraph("07/2025 – 09/2026", body_meta)
        ]
    ], colWidths=[380, 160])
    exp_table_service.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('BOTTOMPADDING', (0,0), (-1,-1), 0),
        ('TOPPADDING', (0,0), (-1,-1), 0),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0)
    ]))
    story.append(exp_table_service)
    story.append(Paragraph("• Completed military service.", bullet_style))

    story.append(Spacer(1, 4))
    exp_table_2 = Table([
        [
            Paragraph("<b>Full-Stack Mobile Developer</b>, Diven-AI", body_bold),
            Paragraph("07/2024 – 07/2025", body_meta)
        ]
    ], colWidths=[380, 160])
    exp_table_2.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('BOTTOMPADDING', (0,0), (-1,-1), 0),
        ('TOPPADDING', (0,0), (-1,-1), 0),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0)
    ]))
    story.append(exp_table_2)
    story.append(Paragraph("• Built full-stack mobile products with Flutter, developed .NET backend APIs, and integrated databases for reliable end-to-end application experiences.", bullet_style))
    story.append(Paragraph("• Architected and deployed cross-platform iOS & Android healthcare applications using Flutter, Dart, and BLoC/Riverpod, cutting multi-platform development time by 40% while maintaining a 99.8% crash-free session rate and consistent 60 FPS UI performance.", bullet_style))
    story.append(Paragraph("• Engineered high-performance backend services using ASP.NET Core (C#) and designed a normalized SQL Server database with 15+ related tables (Patients, Appointments, EHR), optimizing EF Core queries to reduce average API response latency by 35%.", bullet_style))
    story.append(Paragraph("• Implemented enterprise-grade security via OAuth 2.0, JWT, and fine-grained Role-Based Access Control (RBAC) across 3 user tiers (Patients, Doctors, Admins), securing 100% of sensitive medical records and clinical endpoints against unauthorized access.", bullet_style))
    story.append(Paragraph("• Integrated third-party APIs and SDKs (Stripe, Google Maps, Firebase Cloud Messaging), automating 100% of online billing and booking lifecycles while validating 40+ API endpoints via Postman with zero critical integration errors.", bullet_style))
    story.append(Paragraph("• Streamlined QA and deployment workflows by setting up automated CI/CD pipelines and writing unit/mock tests using Flutter Test and Mockito, boosting test coverage to 80%+ and cutting pre-release regression testing time by 50%.", bullet_style))

    # Projects
    add_section_header("Projects")
    
    # Project 1: CMS
    p1_table = Table([
        [Paragraph("<b>Clinic Management System (CMS)</b> — Flutter, .NET, SQL Server", body_bold), Paragraph("04/2025 – 06/2025", body_meta)]
    ], colWidths=[380, 160])
    p1_table.setStyle(TableStyle([('VALIGN', (0,0), (-1,-1), 'TOP'), ('BOTTOMPADDING', (0,0), (-1,-1), 0), ('TOPPADDING', (0,0), (-1,-1), 0), ('LEFTPADDING', (0,0), (-1,-1), 0), ('RIGHTPADDING', (0,0), (-1,-1), 0)]))
    story.append(p1_table)
    story.append(Paragraph("• Designed the complete relational database from scratch, implementing 15+ SQL tables with PK/FK relationships across patients, doctors, appointments, diagnoses, medications, and medical records.", bullet_style))
    story.append(Paragraph("• Developed Flutter frontend and .NET backend, implementing role-based workflows across 3 user roles (Patients, Doctors, Admins), securing 100% of sensitive medical records against unauthorized access.", bullet_style))
    story.append(Paragraph("• Built and integrated 10+ RESTful API endpoints for authentication, doctor management, appointment booking, and records, validated via Postman with zero critical bugs.", bullet_style))

    # Project 2: Alarmus
    story.append(Spacer(1, 2))
    p2_table = Table([
        [Paragraph("<b>Alarmus (Real-time Collaborative Alarms)</b> — Flutter, .NET, FCM", body_bold), Paragraph("01/2025 – 02/2025", body_meta)]
    ], colWidths=[380, 160])
    p2_table.setStyle(TableStyle([('VALIGN', (0,0), (-1,-1), 'TOP'), ('BOTTOMPADDING', (0,0), (-1,-1), 0), ('TOPPADDING', (0,0), (-1,-1), 0), ('LEFTPADDING', (0,0), (-1,-1), 0), ('RIGHTPADDING', (0,0), (-1,-1), 0)]))
    story.append(p2_table)
    story.append(Paragraph("• Built real-time notification-based collaborative alarm app supporting group creation and synchronized member wake-up alerts, cutting manual coordination time.", bullet_style))
    story.append(Paragraph("• Enabled group owners/moderators to trigger simultaneous notifications across all group members (tested with groups of 10+ concurrent users).", bullet_style))
    story.append(Paragraph("• Integrated Flutter frontend with .NET backend via 10+ Swagger-documented REST endpoints.", bullet_style))

    # Project 3: Manetho
    story.append(Spacer(1, 2))
    p3_table = Table([
        [Paragraph("<b>Manetho (Hieroglyphic Translation App)</b> — Flutter, AI / CV / NLP", body_bold), Paragraph("04/2024 – 06/2024", body_meta)]
    ], colWidths=[380, 160])
    p3_table.setStyle(TableStyle([('VALIGN', (0,0), (-1,-1), 'TOP'), ('BOTTOMPADDING', (0,0), (-1,-1), 0), ('TOPPADDING', (0,0), (-1,-1), 0), ('LEFTPADDING', (0,0), (-1,-1), 0), ('RIGHTPADDING', (0,0), (-1,-1), 0)]))
    story.append(p3_table)
    story.append(Paragraph("• Developed Flutter application integrating 2 AI models (hieroglyphic detection + NLP translation), achieving 80% recognition accuracy on test symbol sets.", bullet_style))
    story.append(Paragraph("• Delivered translation results via API integration with average response time under 10 seconds, tested with 20+ researchers and students.", bullet_style))

    # Project 4: Yalla 5roga
    story.append(Spacer(1, 2))
    p4_table = Table([
        [Paragraph("<b>Yalla 5roga (Social Outing Planner)</b> — Flutter, Node.js, PostgreSQL", body_bold), Paragraph("In Development", body_meta)]
    ], colWidths=[380, 160])
    p4_table.setStyle(TableStyle([('VALIGN', (0,0), (-1,-1), 'TOP'), ('BOTTOMPADDING', (0,0), (-1,-1), 0), ('TOPPADDING', (0,0), (-1,-1), 0), ('LEFTPADDING', (0,0), (-1,-1), 0), ('RIGHTPADDING', (0,0), (-1,-1), 0)]))
    story.append(p4_table)
    story.append(Paragraph("• Cross-platform outing planner replacing disorganized group chats with structured venue suggestion, voting, RSVP tracking, and Google Maps routing.", bullet_style))

    # Skills
    add_section_header("Skills & Competencies")
    story.append(Paragraph("• <b>Programming Languages:</b> Dart, JavaScript, TypeScript, Java, C#, C++, SQL", bullet_style))
    story.append(Paragraph("• <b>Mobile & Frontend:</b> Flutter, Provider, Riverpod, BLoC, React Native, Responsive UI Design", bullet_style))
    story.append(Paragraph("• <b>Backend & APIs:</b> ASP.NET Core, RESTful APIs, GraphQL, Microservices, Node.js, Clean Architecture", bullet_style))
    story.append(Paragraph("• <b>Databases:</b> SQL Server, PostgreSQL, SQLite, Firebase, Entity Framework Core", bullet_style))
    story.append(Paragraph("• <b>DevOps & Cloud:</b> Azure, AWS, Docker, CI/CD Pipelines, Git, GitHub Actions, Flutter Test & Mockito", bullet_style))
    story.append(Paragraph("• <b>Security:</b> JWT, OAuth 2.0, Identity Server, Role-Based Access Control (RBAC)", bullet_style))

    # Languages
    add_section_header("Languages")
    story.append(Paragraph("• <b>English:</b> Upper-Intermediate &nbsp;&nbsp;|&nbsp;&nbsp; • <b>Arabic:</b> Native", bullet_style))

    doc.build(story)
    print("CV Generated successfully at:", output_path)

if __name__ == "__main__":
    os.makedirs("assets", exist_ok=True)
    create_pdf("assets/Software Engineer - FullStack Mobile app developer2026.pdf")
