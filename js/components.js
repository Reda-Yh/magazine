// Shared components management
export function loadNavigation() {
    return `
    <nav class="navbar navbar-expand-lg navbar-light bg-white fixed-top shadow-sm">
        <div class="container">
            <a class="navbar-brand fw-bold" href="/index.html">Magazine<span class="text-primary">Numérique</span></a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                        <a class="nav-link" href="/index.html">Accueil</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="/pages/categories.html" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Catégories
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><a class="dropdown-item" href="/pages/categories.html#tech">Technologie</a></li>
                            <li><a class="dropdown-item" href="/pages/categories.html#mode">Mode</a></li>
                            <li><a class="dropdown-item" href="/pages/categories.html#sport">Sport</a></li>
                        </ul>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/pages/about.html">À propos</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/pages/contact.html">Contact</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link btn btn-primary text-white ms-2 px-3" href="/pages/subscribe.html">S'abonner</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>`;
}

export function loadFooter() {
    return `
    <footer class="footer bg-dark text-white py-5">
        <div class="container">
            <div class="row">
                <div class="col-md-4">
                    <h5>Magazine<span class="text-primary">Numérique</span></h5>
                    <p>Votre source d'information moderne et fiable.</p>
                </div>
                <div class="col-md-4">
                    <h5>Liens rapides</h5>
                    <ul class="list-unstyled">
                        <li><a href="/index.html" class="text-white">Accueil</a></li>
                        <li><a href="/pages/categories.html" class="text-white">Catégories</a></li>
                        <li><a href="/pages/about.html" class="text-white">À propos</a></li>
                        <li><a href="/pages/contact.html" class="text-white">Contact</a></li>
                    </ul>
                </div>
                <div class="col-md-4">
                    <h5>Suivez-nous</h5>
                    <div class="social-links">
                        <a href="https://facebook.com" target="_blank" class="text-white me-2"><i class="bi bi-facebook"></i></a>
                        <a href="https://twitter.com" target="_blank" class="text-white me-2"><i class="bi bi-twitter"></i></a>
                        <a href="https://instagram.com" target="_blank" class="text-white me-2"><i class="bi bi-instagram"></i></a>
                        <a href="https://linkedin.com" target="_blank" class="text-white"><i class="bi bi-linkedin"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </footer>`;
}