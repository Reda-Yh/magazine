document.addEventListener('DOMContentLoaded', () => {
    const questionForm = document.getElementById('question-form');
    
    if (questionForm) {
        questionForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Récupération des données du formulaire
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                message: document.getElementById('message').value
            };
            
            // Simulation d'envoi
            console.log('Question envoyée:', formData);
            showNotification('Votre message a bien été envoyé !', 'success');
            questionForm.reset();
        });
    }
});