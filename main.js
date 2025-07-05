const content = document.getElementById('content');
 const buttons = document.querySelectorAll('.nav-btn');

 function clearContent() {
 content.innerHTML = '';
 }

 function setActiveButton(activeBtn) {
 buttons.forEach(btn => btn.classList.remove('active'));
 activeBtn.classList.add('active');
 }

 function loadHome() {
 clearContent();
 content.innerHTML = `
 <div class="one-section">
 <h1 class="one-title">Warda and Co.</h1>
 <p class="one-subtitle">Saveurs Authentiques du Maroc</p>
 <p class="one-description">
 goûtez à l'art culinaire marocain dans un cadre raffiné et chaleureux.
 Nos chefs vous invitent à un voyage gastronomique.
 </p>
 </div>

 <div class="specialites">
 <h2 class="section-title">Plats signatures</h2>
 <div class="gallery">
 <div class="gallery-item">🍖 Tajine d'Agneau aux Pruneaux</div>
 <div class="gallery-item">🐟 Pastilla au Poisson</div>
 <div class="gallery-item">🥘 Couscous Royal</div>
 <div class="gallery-item">🍯 Cornes de Gazelle</div>
 <div class="gallery-item">🫖 Thé à la Menthe</div>
 <div class="gallery-item">🥩 Méchoui d'Agneau</div>
 </div>
 </div>

 <div class="contact-info">
 <h2 class="section-title">Atmosphère Authentique</h2>
 <p style="text-align: center; font-size: 30px; color: #5d4037; line-height: 1.8;">
 Plongez dans l'ambiance feutrée de notre restaurant décoré de zellige traditionnel,
 de lanternes en cuivre et de tapis berbères. Chaque détail a été pensé pour vous
 offrir une expérience culinaire traditionnelle marocaine.
 </p>
 </div>
 `;
 }

 function loadMenu() {
 clearContent();
 content.innerHTML = `
 <h1 class="section-title">Notre Carte</h1>

 <div class="menu-category">
 <h2>🥗 Entrées et Mezze</h2>
 <p>Découvrez nos délicieuses entrées préparées selon les traditions ancestrales</p>
 </div>

 <div class="menu-grid">
 <div class="menu-item">
 <h3>Pastilla au Pigeon <span class="price">28€</span></h3>
 <p><strong>Spécialité de la maison</strong></p>
 <p>Feuilleté croustillant farci au pigeon, amandes, œufs et épices, saupoudré de cannelle et sucre glace</p>
 </div>
 <div class="menu-item">
 <h3>Briouates aux Crevettes <span class="price">16€</span></h3>
 <p>Petits chaussons croustillants farcis aux crevettes, coriandre et épices</p>
 </div>
 <div class="menu-item">
 <h3>Salade d'Orange à la Cannelle <span class="price">12€</span></h3>
 <p>Oranges fraîches, cannelle, fleur d'oranger et olives noires</p>
 </div>
 <div class="menu-item">
 <h3>Zaalouk d'Aubergines <span class="price">14€</span></h3>
 <p>Caviar d'aubergines aux tomates, ail, cumin et huile d'olive</p>
 </div>
 </div>

 <div class="menu-category">
 <h2>🍖 Tajines et Plats Principaux</h2>
 <p>Nos tajines mijotés avec amour dans des plats en terre cuite authentiques</p>
 </div>

 <div class="menu-grid">
 <div class="menu-item">
 <h3>Tajine d'Agneau aux Pruneaux <span class="price">32€</span></h3>
 <p><strong>Spécialité du chef</strong></p>
 <p>Agneau fondant mijoté aux pruneaux, amandes, cannelle et miel</p>
 </div>
 <div class="menu-item">
 <h3>Tajine de Poulet aux Citrons Confits <span class="price">26€</span></h3>
 <p>Poulet fermier aux citrons confits, olives vertes et gingembre</p>
 </div>
 <div class="menu-item">
 <h3>Couscous Royal <span class="price">35€</span></h3>
 <p>Semoule fine, agneau, poulet, merguez, légumes de saison</p>
 </div>
 <div class="menu-item">
 <h3>Pastilla au Poisson <span class="price">24€</span></h3>
 <p>Feuilleté aux fruits de mer, vermicelles chinoises et coriandre</p>
 </div>
 <div class="menu-item">
 <h3>Méchoui d'Agneau <span class="price">38€</span></h3>
 <p>Épaule d'agneau confite aux épices, cuite au four traditionnel</p>
 </div>
 <div class="menu-item">
 <h3>Tajine de Légumes <span class="price">22€</span></h3>
 <p>Légumes de saison mijotés aux épices douces et olives</p>
 </div>
 </div>

 <div class="menu-category">
 <h2>🍰 Desserts et Pâtisseries</h2>
 <p>Terminez votre repas en beauté avec nos douceurs orientales</p>
 </div>

 <div class="menu-grid">
 <div class="menu-item">
 <h3>Cornes de Gazelle <span class="price">12€</span></h3>
 <p>Pâtisseries traditionnelles farcies à la pâte d'amandes</p>
 </div>
 <div class="menu-item">
 <h3>Baklawa aux Noix <span class="price">10€</span></h3>
 <p>Feuilletés croustillants aux noix et miel</p>
 </div>
 <div class="menu-item">
 <h3>Mahalabia à la Fleur d'Oranger <span class="price">9€</span></h3>
 <p>Crème onctueuse parfumée à la fleur d'oranger et pistaches</p>
 </div>
 <div class="menu-item">
 <h3>Salade de Fruits Exotiques <span class="price">11€</span></h3>
 <p>Fruits frais de saison, menthe et eau de rose</p>
 </div>
 </div>

 <div class="menu-category">
 <h2>☕ Boissons et Thés</h2>
 <p>Accompagnez votre repas de nos boissons traditionnelles</p>
 </div>

 <div class="menu-grid">
 <div class="menu-item">
 <h3>Thé à la Menthe <span class="price">6€</span></h3>
 <p>Thé vert, menthe fraîche, préparé selon la tradition</p>
 </div>
 <div class="menu-item">
 <h3>Café Marocain <span class="price">5€</span></h3>
 <p>Café turc parfumé à la cardamome</p>
 </div>
 <div class="menu-item">
 <h3>Jus d'Orange Pressé <span class="price">7€</span></h3>
 <p>Oranges fraîches du Maroc</p>
 </div>
 <div class="menu-item">
 <h3>Bissap <span class="price">6€</span></h3>
 <p>Infusion d'hibiscus, menthe et gingembre</p>
 </div>
 </div>
 `;
 }

 function loadContact() {
 clearContent();
 content.innerHTML = `
 <h1 class="section-title">Nous Contacter</h1>

 <div class="contact-info">
 <div class="contact-item">
 <h3>📍 Adresse</h3>
 <p>42 Rue du terminal<br>75018 Paris, France</p>
 </div>

 <div class="contact-item">
 <h3>📞 Téléphone</h3>
 <p>01 42 85 67 89</p>
 </div>

 <div class="contact-item">
 <h3>📧 Email</h3>
 <p>contact@wardaandco.fr</p>
 </div>

 <div class="contact-item">
 <h3>🕐 Horaires d'Ouverture</h3>
 <p><strong>Lundi - Jeudi :</strong> 19h00 - 23h30</p>
 <p><strong>Vendredi - Dimanche :</strong> 19h00 - 00h30</p>
 <p><strong>Fermé le mardi</strong></p>
 </div>

 <div class="contact-item">
 <h3>🚗 Trajet et Parking</h3>
 <p>Livraison disponible dans un rayon de 3km</p>
 <p>Uber Eats partenaire</p>
 </div>
 </div>
 `;
 }

 function loadReservation() {
 clearContent();
 content.innerHTML = `
 <h1 class="section-title">Réserver une Table</h1>

 <div class="reservation-form">
 <p style="text-align: center; margin-bottom: 2rem; font-size: 35px; color: #5d4037;">
 Réservez votre table pour une expérience culinaire dans notre restaurant marocain authentique.
 </p>

 <form id="reservationForm">
 <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
 <div class="form-group">
 <label for="nom">Nom *</label>
 <input type="text" id="nom" name="nom" required>
 </div>

 <div class="form-group">
 <label for="prenom">Prénom *</label>
 <input type="text" id="prenom" name="prenom" required>
 </div>
 </div>

 <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
 <div class="form-group">
 <label for="email">Email *</label>
 <input type="email" id="email" name="email" required>
 </div>

 <div class="form-group">
 <label for="telephone">Téléphone *</label>
 <input type="tel" id="telephone" name="telephone" required>
 </div>
 </div>

 <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 1rem;">
 <div class="form-group">
 <label for="date">Date *</label>
 <input type="date" id="date" name="date" required>
 </div>

 <div class="form-group">
 <label for="heure">Heure *</label>
 <select id="heure" name="heure" required>
 <option value="">Choisir l'heure</option>
 <option value="19:00">19h00</option>
 <option value="19:30">19h30</option>
 <option value="20:00">20h00</option>
 <option value="20:30">20h30</option>
 <option value="21:00">21h00</option>
 <option value="21:30">21h30</option>
 <option value="22:00">22h00</option>
 <option value="22:30">22h30</option>
 </select>
 </div>

 <div class="form-group">
 <label for="personnes">Nombre de personnes *</label>
 <select id="personnes" name="personnes" required>
 <option value="">Choisir</option>
 <option value="1">1 personne</option>
 <option value="2">2 personnes</option>
 <option value="3">3 personnes</option>
 <option value="4">4 personnes</option>
 <option value="5">5 personnes</option>
 <option value="6">6 personnes</option>
 <option value="7">7 personnes</option>
 <option value="8">8 personnes</option>
 <option value="8+">Plus de 8</option>
 </select>
 </div>
 </div>

 <div class="form-group">
 <label for="occasion">Occasion spéciale</label>
 <select id="occasion" name="occasion">
 <option value="">Sélectionner (optionnel)</option>
 <option value="rendez-vous">Rendez-vous professionnel</option>
 <option value="famille">Repas de famille</option>
 <option value="celebration">Célébration</option>
 <option value="autre">Autre</option>
 </select>
 </div>

 <div class="form-group">
 <label for="commentaires">Demandes particulières</label>
 <textarea id="commentaires" name="commentaires" rows="4"
 placeholder="Allergies, régime alimentaire, préférences de table, etc."></textarea>
 </div>

 <div style="text-align: center; margin-top: 2rem;">
 <button type="submit" class="btn-primary">Confirmer la Réservation</button>
 </div>
 </form>
 </div>

 <div class="contact-info" style="margin-top: 2rem;">
 <h3 style="text-align: center; color: #7b8f4b; margin-bottom: 1rem;">Informations Importantes</h3>
 <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1rem;">
 <div class="contact-item">
 <h4>⏰ Politique d'Annulation</h4>
 <p>Annulation gratuite jusqu'à 2h avant l'heure de réservation</p>
 </div>
 <div class="contact-item">
 <h4>👔 Code Vestimentaire</h4>
 <p>Tenue correcte exigée. Pas de short ni de tongs</p>
 </div>
 <div class="contact-item">
 <h4>💳 Moyens de Paiement</h4>
 <p>CB, Espèces, Chèques. Tickets restaurant acceptés</p>
 </div>
 <div class="contact-item">
 <h4>🎉 Groupes</h4>
 <p>Pour plus de 8 personnes, contactez-nous directement</p>
 </div>
 </div>
 </div>
 `;
 }

 // Event listeners
 document.getElementById('home-btn').addEventListener('click', (e) => {
 setActiveButton(e.target);
 loadHome();
 });

 document.getElementById('menu-btn').addEventListener('click', (e) => {
 setActiveButton(e.target);
 loadMenu();
 });

 document.getElementById('contact-btn').addEventListener('click', (e) => {
 setActiveButton(e.target);
 loadContact();
 });

 document.getElementById('reservation-btn').addEventListener('click', (e) => {
 setActiveButton(e.target);
 loadReservation();
 });

 // Formulaire submit
 document.addEventListener('submit', function(e) {
 if (e.target.id === 'reservationForm') {
 e.preventDefault();

 // Récupération des données du formulaire
 const formData = new FormData(e.target);
 const reservation = {};
 for (let [key, value] of formData.entries()) {
 reservation[key] = value;
 }

 // Simulation d'envoi
 alert(`Merci ${reservation.prenom} ${reservation.nom} !\n\nVotre réservation pour ${reservation.personnes} personne(s) le ${reservation.date} à ${reservation.heure} a été enregistrée.\n\nVous recevrez une confirmation par email à ${reservation.email}.\n\nÀ bientôt chez Warda and Co. !`);

 // Reset du formulaire
 e.target.reset();
 }
 });

 // date min. ajourd'hui
 document.addEventListener('DOMContentLoaded', function() {
 const dateInput = document.getElementById('date');
 if (dateInput) {
 const today = new Date().toISOString().split('T')[0];
 dateInput.min = today;
 }
 });

 // load page d'acceuil par défaut
 loadHome();

 // Script qui surveille automatiquement les changements
function fixNumbers() {
    document.querySelectorAll('*').forEach(el => {
        if (el.childNodes.length === 1 && el.childNodes[0].nodeType === 3) {
            const text = el.textContent;
            if (/\d/.test(text)) {
                el.innerHTML = text.replace(/(\d+)/g, '<span style="font-family: Arial, sans-serif;">$1</span>');
            }
        }
    });
}

setInterval(fixNumbers, 1000);