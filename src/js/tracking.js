document.addEventListener("DOMContentLoaded", function() {
        // Seleciona todos os botões de compra da página
        const buyButtons = document.querySelectorAll('.btn-buy-track');

        buyButtons.forEach(button => {
            button.addEventListener('click', function() {
                
                // 1️⃣ Rastreamento: Facebook (Meta) Pixel
                // Dispara o evento de "InitiateCheckout" (Início de Finalização de Compra)
                if (typeof fbq === 'function') {
                    fbq('track', 'InitiateCheckout', {
                        content_name: 'Guia Profissional de Auto Massagem',
                        value: 49.90,
                        currency: 'BRL'
                    });
                }

                // 2️⃣ Rastreamento: Google Tag Manager / Analytics 4 (DataLayer)
                // Envia as informações do produto para o DataLayer
                window.dataLayer = window.dataLayer || [];
                window.dataLayer.push({
                    'event': 'click_checkout',
                    'ecommerce': {
                        'currency': 'BRL',
                        'value': 49.90,
                        'items': [
                            {
                                'item_id': 'guia_automassagem_01',
                                'item_name': 'Guia Profissional de Auto Massagem',
                                'price': 49.90,
                                'quantity': 1
                            }
                        ]
                    }
                });
                
                // Nota: O redirecionamento para o checkout vai ocorrer naturalmente
                // pelo atributo href="..." do seu botão <a>.
            });
        });
    });