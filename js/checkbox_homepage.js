const checkboxContainer = document.querySelector('.checkbox__checkbox');

if (checkboxContainer) {
    checkboxContainer.addEventListener('change', function(event) {
        if (event.target.type === 'checkbox') {
            const checkbox = event.target;
            const label = checkbox.closest('.checkbox__label');
            
            let svg = label.querySelector('svg');

            if (checkbox.checked) {
                if (!svg) {
                    svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
                    svg.setAttribute('width', '20');
                    svg.setAttribute('height', '20');
                    svg.setAttribute('viewBox', '0 0 20 20');
                    svg.setAttribute('fill', 'none');
                    svg.classList.add('collaboration__svg'); 
                    
                    svg.innerHTML = `
                        <path fill-rule="evenodd" clip-rule="evenodd" 
                        d="M15.5972 5.08403C15.8409 5.2372 15.9068 5.54764 15.7443 5.7774L9.38069 14.7773C9.29256 14.902 9.14981 14.9828 8.99171 14.9976C8.83361 15.0123 8.67682 14.9595 8.56447 14.8536L4.32207 10.1465C4.11497 10.6583 4.11497 10.3417 4.32207 10.1465C4.52916 9.95121 4.86493 9.95121 5.07203 10.1465L8.85703 13.7152L14.8618 5.2227C15.0243 4.99294 15.3535 4.93085 15.5972 5.08403Z" 
                        fill="#9EFF00" />`;
                    
                    label.append(svg);
                }
                svg.style.display = 'block';
            } else {
                if (svg) {
                    svg.style.display = 'none';
                }
            }
        }
    });
}