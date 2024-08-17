

<!DOCTYPE html>
<html lang="ne">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tilak Goat Farm</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <h1>तिलक बाख्रापालन फार्म</h1>
        <nav>
            <button class="nav-toggle">मेनु</button>
            <ul class="nav-menu">
                <li><a href="#home">होम</a></li>
                <li><a href="#about">हाम्रो बारेमा</a></li>
                <li><a href="#goats">बाख्राहरू</a></li>
                <li><a href="#contact">सम्पर्क</a></li>
            </ul>
        </nav>
    </header>

    <main>
        <section id="home">
            <h2>स्वागत छ</h2>
            <p>तपाईंलाई तिलक बाख्रापालन फार्ममा स्वागत छ! हामी उत्कृष्ट बाख्रा पालन र सेवा प्रदान गर्न समर्पित छौं।</p>
        </section>

        <section id="about">
            <h2>हाम्रो बारेमा</h2>
            <p>तिलक बाख्रापालन फार्मले गुणस्तरीय बाख्रा पालन र पशुपालनका लागि समर्पित छ। हाम्रो उद्देश्य स्वस्थ र बलियो बाख्राहरू उत्पादन गर्नु हो, जसले सस्तो र गुणस्तरीय मांस र दूध प्रदान गर्छ।</p>
            <p>हामीसँग अनुभवी किसान र पशुचिकित्सकहरूको टोली छ, जसले बाख्राको उत्तम हेरचाह गर्छ।</p>
        </section>

        <section id="goats">
            <h2>बाख्राहरू</h2>
            <div class="gallery">
                <img src="goat1.jpg" alt="Goat 1">
                <img src="goat2.jpg" alt="Goat 2">
                <img src="goat3.jpg" alt="Goat 3">
            </div>
            <p>हाम्रा बाख्राहरू स्वास्थ्य र गुणस्तरको ग्यारेन्टीका साथ प्रस्तुत गरिन्छ। हाम्रा बाख्राहरू विभिन्न जातका छन् र उन्नत उत्पादन क्षमताका लागि चयन गरिएका छन्।</p>
        </section>

        <section id="contact">
            <h2>सम्पर्क गर्नुहोस्</h2>
            <form id="contactForm">
                <label for="name">नाम:</label>
                <input type="text" id="name" name="name" required>

                <label for="email">ईमेल:</label>
                <input type="email" id="email" name="email" required>

                <label for="message">सन्देश:</label>
                <textarea id="message" name="message" required></textarea>

                <button type="submit">पठाउनुहोस्</button>
            </form>
        </section>
    </main>

    <footer>
        <p>© २०२४ तिलक बाख्रापालन फार्म। सर्वाधिकार सुरक्षित।</p>
    </footer>

    <script src="script.js"></script>
</body>
</html>


        
