// Actualización automática del año de copyright
document.addEventListener('DOMContentLoaded', function () {
  var yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // Panel de servicios interactivo en el Hero
  var panelDesc = document.getElementById('panelDesc');
  var breakers = document.querySelectorAll('.breaker-item');

  if (breakers.length > 0) {
    breakers.forEach(function (breaker) {
      breaker.addEventListener('click', function () {
        // Remover clase activa de todos
        breakers.forEach(function (b) {
          b.classList.remove('is-active');
        });

        // Activar el seleccionado
        breaker.classList.add('is-active');

        // Actualizar el texto descriptivo dinámicamente
        var newDesc = breaker.getAttribute('data-desc');
        if (panelDesc && newDesc) {
          panelDesc.textContent = newDesc;
        }
      });
    });
  }

  // Acordeón de Preguntas Frecuentes (FAQ)
  var faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(function (item) {
    var btn = item.querySelector('.faq-q');
    if (btn) {
      btn.addEventListener('click', function () {
        var isOpen = item.classList.contains('open');

        // Cerrar todos los demás
        faqItems.forEach(function (other) {
          other.classList.remove('open');
          var otherBtn = other.querySelector('.faq-q');
          if (otherBtn) {
            otherBtn.setAttribute('aria-expanded', 'false');
          }
        });

        // Alternar el actual
        if (!isOpen) {
          item.classList.add('open');
          btn.setAttribute('aria-expanded', 'true');
        }
      });
    }
  });
});"""

os.makedirs("css", exist_ok=True)
os.makedirs("js", exist_ok=True)

with open("index.html", "w", encoding="utf-8") as f:
    f.write(html_code)

with open("css/styles.css", "w", encoding="utf-8") as f:
    f.write(css_code)

with open("js/main.js", "w", encoding="utf-8") as f:
    f.write(js_code)

print("Archivos generados correctamente.")