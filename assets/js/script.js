function openEventModal() {
    document.getElementById('eventModal').classList.remove('d-none');
}

function closeEventModal() {
    document.getElementById('eventModal').classList.add('d-none');
}

function openCreateEventModal() {
    document.getElementById('eventModal').classList.add('d-none');
    document.getElementById('createEventModal').classList.remove('d-none');
}

function closeCreateEventModal() {
    document.getElementById('createEventModal').classList.add('d-none');
    document.getElementById('eventModal').classList.remove('d-none');
}

function openCreateServerModal() {
    document.getElementById('createServerModal').classList.remove('d-none');
}

function closeCreateServerModal() {
    document.getElementById('createServerModal').classList.add('d-none');
}

function toggleServerMenu(event) {
    const menu = document.getElementById('serverDropdownMenu');
    menu.classList.toggle('d-none');
    event.stopPropagation();
}

// Close menu when clicking outside
document.addEventListener('click', function(event) {
    const menu = document.getElementById('serverDropdownMenu');
    if (!menu.contains(event.target) && !event.target.closest('.server-channels h6')) {
        menu.classList.add('d-none');
    }
});

// Add click handler to server name
document.querySelector('.server-channels h6').onclick = toggleServerMenu;

// Add click handler to the + server item
document.querySelector('.server-item').onclick = openCreateServerModal;
// Update the existing button onclick
document.querySelector('.btn-createEvent').onclick = openCreateEventModal;