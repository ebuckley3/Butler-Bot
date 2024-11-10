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
