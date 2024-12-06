document.addEventListener('DOMContentLoaded', () => {
    // Gestion du formulaire de commentaire
    const commentForm = document.querySelector('.comment-form');
    if (commentForm) {
        commentForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const commentText = document.getElementById('comment').value;
            if (commentText.trim()) {
                // Simulation d'ajout de commentaire
                const newComment = createCommentElement({
                    name: 'Utilisateur',
                    time: 'À l\'instant',
                    text: commentText,
                    avatar: 'https://picsum.photos/51/50'
                });
                
                document.querySelector('.comments-list').prepend(newComment);
                commentForm.reset();
                showNotification('Votre commentaire a été publié !', 'success');
            }
        });
    }

    // Gestion des boutons de partage
    const shareButtons = document.querySelectorAll('.share-buttons a');
    shareButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const platform = button.textContent.trim();
            showNotification(`Partage sur ${platform} simulé !`, 'success');
        });
    });
});

function createCommentElement(comment) {
    const div = document.createElement('div');
    div.className = 'comment mb-4 p-3 bg-white rounded';
    div.innerHTML = `
        <div class="d-flex">
            <img src="${comment.avatar}" alt="User" class="rounded-circle me-3">
            <div>
                <h5 class="mb-1">${comment.name}</h5>
                <p class="text-muted small">${comment.time}</p>
                <p>${comment.text}</p>
            </div>
        </div>
    `;
    return div;
}