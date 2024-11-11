function getResponse() {
    const userInput = document.getElementById("user-input").value;
    const chatbox = document.getElementById("chatbox");

    // Simple response logic for now
    let response = "";

    if (userInput.toLowerCase().includes("gender performativity")) {
        response = "Gender performativity is the concept that gender is not an innate quality but is expressed and performed based on societal expectations.";
    } else if (userInput.toLowerCase().includes("judith butler")) {
        response = "Judith Butler is a key theorist in gender studies, known for her work on gender performativity, suggesting that gender is a social construct performed through repeated acts.";
    } else {
        response = "I'm here to help answer questions about gender performativity and women's studies. Please ask me something related!";
    }

    // Display the conversation
    chatbox.innerHTML += `<p><strong>You:</strong> ${userInput}</p>`;
    chatbox.innerHTML += `<p><strong>Bot:</strong> ${response}</p>`;
    document.getElementById("user-input").value = ""; // Clear the input
}
// Knowledge base for Butler Bot
const knowledgeBase = {
    "gender performativity": "Gender performativity is the idea that gender is not an inherent quality but is expressed and performed through societal expectations.",
    "judith butler": "Judith Butler, a leading gender theorist, argues that gender is a social construct performed through repeated acts.",
    "intersectionality": "Intersectionality is a framework by Kimberlé Crenshaw to understand how different aspects of identity intersect to create unique experiences of oppression.",
    "feminism": "Feminism advocates for equality between genders. It has evolved through multiple waves, each focusing on different issues.",
    "first-wave feminism": "First-wave feminism, in the 19th and early 20th centuries, focused on women's suffrage and legal rights.",
    "second-wave feminism": "Second-wave feminism, from the 1960s-1980s, addressed issues like workplace inequality, reproductive rights, and sexual liberation.",
    "third-wave feminism": "Third-wave feminism emerged in the 1990s, embracing diversity and intersectionality within feminist discourse.",
    "fourth-wave feminism": "Fourth-wave feminism, associated with the 2010s, focuses on digital activism and intersectional issues like #MeToo.",
    "bell hooks": "bell hooks was a prominent feminist and cultural critic, emphasizing the importance of race, capitalism, and gender in feminist theory.",
    "queer theory": "Queer theory challenges fixed definitions of gender and sexuality, emphasizing fluidity and the social constructs of identity.",
    "social construction of gender": "The social construction of gender posits that gender roles are created by societal expectations rather than biological differences.",
    "heteronormativity": "Heteronormativity is the assumption that heterosexuality is the default or 'normal' orientation, marginalizing other orientations.",
    "toxic masculinity": "Toxic masculinity refers to cultural norms that can harm men by promoting aggression, emotional suppression, and dominance.",
    "michel foucault": "Michel Foucault was a philosopher who explored power dynamics in society, including their effects on sexuality and gender norms.",
    "cisgender": "Cisgender describes individuals whose gender identity matches the sex they were assigned at birth.",
    "nonbinary": "Nonbinary is an identity that doesn't fit within traditional categories of male or female.",
    "transgender": "Transgender describes individuals whose gender identity differs from the sex they were assigned at birth.",
    "stonewall riots": "The Stonewall Riots of 1969 were a pivotal event in LGBTQ+ history, sparking movements for LGBTQ+ rights.",
    "coming out": "Coming out is the process of revealing one's LGBTQ+ identity to oneself or others, often a significant and personal experience.",
    "androgyny": "Androgyny combines or blurs traditional male and female characteristics, challenging traditional gender roles."
    "gender performativity": "Gender performativity is the concept that gender is expressed through behaviors and actions that align with societal expectations, rather than being an innate quality.",
    "judith butler": "Judith Butler is a prominent gender theorist who introduced the concept of gender performativity, suggesting that gender is a performance shaped by repeated acts.",
    "social construction of gender": "The social construction of gender theory posits that gender roles are created by societal norms, not biology.",
    "repeated acts": "In gender performativity, repeated acts are behaviors that reinforce gender norms over time, shaping how society perceives gender.",
    "heteronormativity": "Heteronormativity is the assumption that heterosexuality is the default or 'normal' sexual orientation, which influences gender roles and expectations.",
    "drag performance": "Drag performance often highlights gender performativity by showcasing exaggerated or alternative presentations of gender.",
    "sex vs. gender": "Sex typically refers to biological attributes, while gender refers to societal roles, behaviors, and expectations associated with being male or female.",
    "gender roles": "Gender roles are societal norms dictating behaviors considered appropriate for individuals based on their gender.",
    "masculinity": "Masculinity encompasses cultural traits and behaviors often associated with men, shaped by societal expectations.",
    "femininity": "Femininity includes cultural traits and behaviors typically associated with women, which can be reinforced or challenged through performative acts.",
    "toxic masculinity": "Toxic masculinity refers to harmful cultural norms that promote aggressive, dominant, and emotionally repressive behaviors in men.",
    "cisgender": "Cisgender describes someone whose gender identity matches the sex they were assigned at birth, as opposed to transgender.",
    "transgender": "Transgender describes individuals whose gender identity differs from the sex assigned at birth, challenging traditional gender categories.",
    "nonbinary": "Nonbinary is a gender identity that doesn’t fit within the traditional categories of male or female.",
    "gender expression": "Gender expression is how an individual outwardly presents their gender, which may or may not align with societal norms.",
    "intersectionality": "Intersectionality is a framework that considers how different aspects of a person’s identity (e.g., gender, race) intersect to affect their experience.",
    "androgyny": "Androgyny refers to a gender expression that combines or blurs traditional male and female characteristics.",
    "queer performativity": "Queer performativity challenges fixed identities, showcasing fluidity in gender and sexuality.",
    "social norms": "Social norms are unwritten rules about how people are expected to behave, which influence gender roles and expectations.",
    "gender fluidity": "Gender fluidity is the idea that gender is not fixed and can change over time, reflecting personal experiences or preferences.",
    "compulsory heterosexuality": "Compulsory heterosexuality is a concept that assumes heterosexuality is the norm, impacting how gender roles are structured and performed.",
    "feminism": "Feminism is a movement for gender equality that challenges traditional gender roles and advocates for women's rights.",
    "queer theory": "Queer theory challenges fixed definitions of gender and sexuality, emphasizing fluidity and socially constructed identities.",
    "patriarchy": "Patriarchy is a social system in which men hold primary power, influencing gender expectations and reinforcing gender roles.",
    "performance of identity": "The performance of identity refers to how individuals present aspects of their identity, including gender, based on social contexts.",
    "normativity": "Normativity refers to standards or norms considered 'normal' or acceptable, often shaping gender expectations and behaviors.",
    "gender binary": "The gender binary is the classification of gender into two distinct categories, male and female, which performativity challenges.",
    "body politics": "Body politics explores how societal norms control and regulate bodies, especially regarding gender and sexuality.",
    "passing": "Passing refers to being perceived as a certain gender or identity, often aligning with or challenging societal norms.",
    "identity politics": "Identity politics involves advocacy for the rights of particular social groups, often addressing gender and sexuality issues."
};
function getResponse() {
    const userInput = document.getElementById("user-input").value.toLowerCase();
    const chatbox = document.getElementById("chatbox");

    // Default response if no match is found
    let response = "I'm here to help answer questions about gender performativity and women's studies. Try asking about gender theory, key figures, or feminism.";

    // Check if user input matches any topics in the knowledge base
    for (const topic in knowledgeBase) {
        if (userInput.includes(topic)) {
            response = knowledgeBase[topic];
            break;
        }
    }

    // Display the conversation
    chatbox.innerHTML += `<p><strong>You:</strong> ${userInput}</p>`;
    chatbox.innerHTML += `<p><strong>Bot:</strong> ${response}</p>`;
    document.getElementById("user-input").value = ""; // Clear the input
}
