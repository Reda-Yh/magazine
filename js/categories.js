document.addEventListener('DOMContentLoaded', () => {
    // Gestion des filtres
    const filterButtons = document.querySelectorAll('.filters button');
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Retirer la classe active de tous les boutons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Ajouter la classe active au bouton cliqué
            button.classList.add('active');
            
            // Logique de filtrage à implémenter
            const filter = button.textContent.toLowerCase();
            console.log('Filtre sélectionné:', filter);
        });
    });
});