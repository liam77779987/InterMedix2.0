function obtenerSugerencia() {
    const input = document.getElementById('enfermedadInput').value.toLowerCase().trim();
    const resultadoDiv = document.getElementById('resultadoSugerencia');
    let sugerencia = '';

    const sugerencias = {
        'resfriado': {
            ayuda: "Descansa, bebe mucho líquido (agua, caldos), y considera medicamentos de venta libre como paracetamol o ibuprofeno para la fiebre y el dolor. Los descongestionantes nasales pueden ayudar.",
            medicamentos: "Usa un paño húmedo y tibio sobre la frente o nariz para aliviar la congestión sinusal."
        },
        'dolor de cabeza': {
            ayuda: "Descanso en un ambiente oscuro y tranquilo, hidratación. Para el dolor, un analgésico de venta libre como ibuprofeno o aspirina suele ser efectivo. Evita los desencadenantes conocidos.",
            medicamentos: "Aplica una compresa fría en la frente o la nuca, o practica un masaje suave en las sienes.."
        },
        'alergias': {
            ayuda: "Identifica y evita el alérgeno. Los antihistamínicos orales (ej: loratadina, cetirizina) son el tratamiento más común. Consulta si necesitas un spray nasal con esteroides.",
            medicamentos: "Lava tu ropa de cama con agua caliente con frecuencia y utiliza un purificador de aire con filtro HEPA en casa."
        },
        'gripe': {
            ayuda: "Reposo absoluto, hidratación constante. Puedes tomar paracetamol o ibuprofeno para manejar la fiebre y los dolores musculares. Si los síntomas empeoran, consulta a un médico.",
            medicamentos: "Consume caldos de pollo y comidas suaves, lo que ayuda a reponer nutrientes y es fácil de digerir.."
        },
        'indigestión': {
            ayuda: "Evita comidas pesadas, bebe tés de hierbas (menta o jengibre). Un antiácido de venta libre puede proporcionar alivio rápido. No te acuestes inmediatamente después de comer.",
            medicamentos: "Da un paseo corto después de comer para ayudar a la digestión y no uses ropa ajustada que presione tu abdomen.."
        },
        'quemadura solar': {
            ayuda: "Enfría la piel con paños húmedos o un baño fresco. Aplica lociones con aloe vera o cremas hidratantes. Evita exponer la zona al sol. Si hay ampollas grandes, consulta.",
            medicamentos: "Mantente cubierto con ropa ligera y de colores claros si debes salir al exterior para evitar mayor daño."
        },
        'tos seca': {
            ayuda: "Usa un humidificador. Bebe líquidos calientes con miel y limón para calmar la garganta. Considera un supresor de la tos de venta libre, especialmente para dormir.",
            medicamentos: "Chupa un caramelo duro o pastilla (no medicinal) para estimular la producción de saliva y calmar la garganta.."
        }
    };

    if (sugerencias[input]) {
        const info = sugerencias[input];
        sugerencia = `
            <h3><i class="fas fa-notes-medical"></i> Recomendaciones para ${input.charAt(0).toUpperCase() + input.slice(1)}</h3>
            <p><strong>Recomendaciones de Cuidado:</strong> ${info.ayuda}</p>
            <p><strong>Sugerencias Caseras:</strong> ${info.medicamentos} <small>(Consulta siempre a un farmacéutico o médico)</small></p>
        `;
    } else if (input === '') {
        sugerencia = '<p>⚠️ Por favor, ingresa una enfermedad o síntoma para buscar sugerencias.</p>';
    } else {
        sugerencia = `<p>🔍 Lo sentimos, no tenemos sugerencias específicas para -${input.charAt(0).toUpperCase() + input.slice(1)}- en nuestra base de datos. Por favor, <a href="#contacto" style="color: #007bff; text-decoration: none; font-weight: 600;">contacta a nuestro equipo</a>.</p>`;
    }

    resultadoDiv.style.opacity = 0;
    setTimeout(() => {
        resultadoDiv.innerHTML = sugerencia;
        resultadoDiv.style.opacity = 1;
    }, 10);
}

(function () {
    const overlay = document.getElementById('emergOverlay');
    const closeBtn = document.getElementById('emergClose');
    function show() { overlay.classList.remove('emerg-hidden'); overlay.setAttribute('aria-hidden', 'false'); }
    function hide() { overlay.classList.add('emerg-hidden'); overlay.setAttribute('aria-hidden', 'true'); }
    document.querySelectorAll('.btn-emergency').forEach(el => {
        el.addEventListener('click', e => {
            e.preventDefault();
            show();
            clearTimeout(el._hideTimer);
            el._hideTimer = setTimeout(hide, 6000);
        });
    });
    closeBtn.addEventListener('click', hide);
    overlay.addEventListener('click', e => { if (e.target === overlay) hide(); });
    document.addEventListener('keydown', e => { if (e.key === 'Escape') hide(); });
})();
