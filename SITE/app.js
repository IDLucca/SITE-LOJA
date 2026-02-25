class UI {
    static toggleDetails(index) {
        const detailsDiv = document.getElementById(`details-${index}`);
        const btnIcon = document.getElementById(`icon-${index}`);
        if (detailsDiv && btnIcon) {
            if (detailsDiv.classList.contains('hidden')) {
                detailsDiv.classList.remove('hidden');
                btnIcon.innerText = '⌃';
            } else {
                detailsDiv.classList.add('hidden');
                btnIcon.innerText = '⌄';
            }
        }
    }

    static render() {
        const servicesData = [
            { 
                title: "Bots para Lojas", icon: "🛒", 
                desc: "Solução completa de vendas no Discord e Web: gerencie produtos, cupons, preços e estoque com facilidade.",
                items: [
                    "Painel de produtos: adicionar, editar, remover e precificar",
                    "Cupons de desconto: criar, editar e deletar direto pelo site",
                    "Atualização de estoque e preços automática",
                    "Intermediador de pagamentos com saques instantâneos (1/sec)",
                    "Widget de loja para incorporar em seu site"
                ] 
            },
            { 
                title: "Atendimento Automatizado", icon: "💬", 
                desc: "Chatbot interativo para o Discord, WhatsApp e Web. Aproxime-se de clientes onde eles estejam.",
                items: [
                    "Menu interativo para seleção de produto e jogo",
                    "Integração nativa com WhatsApp Business API",
                    "Chat embed em sites personalizados",
                    "Logs públicas de interações e vendas"
                ] 
            },
            { 
                title: "Bots Personalizados", icon: "⚙️", 
                desc: "Desenvolvemos bots sob medida: verificação, backup, auto-role e automações específicas para seu servidor.",
                items: [
                    "Verificação via botão e auto-role configurável",
                    "Reaplicação em massa de cargos com um clique",
                    "Backup & restauração de membros (≈ membros a 1/sec)",
                    "Site personalizado com painel de controle completo",
                    "Tudo o que você procura, você encontra aqui!"
                ] 
            }
        ];

        const productsData = [
            { 
                name: "Bot de Robux & Pass", price: 249.90, desc: "👁️ Maior visibilidade para sua comunidade", tag: "Mais Vendido!", isNew: true,
                features: [
                    "👁️ Maior visibilidade para sua comunidade",
                    "⚡ Otimização total nos processos de venda",
                    "📈 Resultados reais e mensuráveis para administradores e lojistas",
                    "⚙️ Painel avançado de configuração do Bot",
                    "🎟️ Painel para criar, editar e deletar cupons de desconto",
                    "💸 Intermediador: receba no site e saque instantâneo em até 10s",
                    "✅ Sistema automático de entrega e print do comprovante",
                    "🤖 Dois sistemas de atendimento integrados (robux): v1.0, v2.0 e v3.0",
                    "🎮 Sistema de atendimento integrado (pass): v2.0",
                    "🧠 Configuração automática de servidor em 2 cliques via IA",
                    "📦 Entrega manual e semiautomática de pedidos",
                    "🍪 Envio de todos os pedidos com 1 clique via cookie do Roblox",
                    "🌐 Novo Website de Configuração",
                    "⭐ Sistema Avançado de Avaliações com notas de 1 a 5 estrelas",
                    "📊 Dashboard de Estatísticas para análise das avaliações",
                    "🤝 Padronização de Comissões para parceiros (ex: youtubers)",
                    "📝 Textos automáticos: configure atalhos para mensagens prontas",
                    "✏️ Todos os textos do bot editáveis pelo painel",
                    "🛍️ Novo Sistema de Vendas de Gamepass com configuração",
                    "🔐 Cupons exclusivos: limite de uso, valor mínimo e restrição",
                    "🏅 Cargos automáticos atribuídos conforme o valor da compra",
                    "📱 Comando /gerarpix: gere QR Code Pix rápido",
                    "🧭 Mensagens interativas guiando a criação de Gamepass"
                ]
            },
            { 
                name: "Bot de OAuth v2.0", price: 39.90, desc: "👤 Cargo ao se verificar no servidor", tag: "", isNew: true,
                features: ["Verificação segura em 1 clique", "Backup de até 100k membros", "Restauração rápida (1/sec)", "Dashboard de gestão completo", "Sistema anti-raid e VPN"]
            },
            { 
                name: "Bot de Tickets v3.0", price: 79.90, desc: "🎫 Sistema completo de tickets", tag: "Novidade!", isNew: true,
                features: ["Múltiplos departamentos", "Transcrição automática", "Encaminhamento inteligente", "Painel administrativo", "Notificações em tempo real"]
            },
            { 
                name: "Bot de Moderação IA", price: 129.90, desc: "🛡️ Moderação com Inteligência Artificial", tag: "Avançado!", isNew: true,
                features: ["Detecção de spam IA", "Filtro de palavras inteligente", "Log de auditoria", "Auto-ban configurável", "Whitelist de canais"]
            }
        ];

        const feedbacksData = [
            { name: "Borges", role: "CEO, Alpha Bux #4K", text: "Uma das melhores escolhas que fiz foi automatizar a Alpha Bux. A automação trouxe um grande valor ao meu negócio!" },
            { name: "Cash", role: "CEO, Cashx Community", text: "Minhas vendas aumentaram, a organização do meu servidor também melhorou. Totalmente seguro!" },
            { name: "Cereja", role: "CEO, Cherry Imperium", text: "Eu não preciso mais atender os clientes na hora do pagamento, o bot faz tudo por mim! Nota 10/10." }
        ];

        // 1. Render Serviços
        const servicesGrid = document.getElementById('services-grid');
        if (servicesGrid) {
            servicesGrid.innerHTML = servicesData.map((s) => `
                <div class="glass p-8 rounded-2xl flex flex-col h-full bg-[#0a0a0a]/50 border-white/5">
                    <div class="w-12 h-12 bg-blue-900/30 rounded-lg flex items-center justify-center text-xl mb-6 text-blue-400">${s.icon}</div>
                    <h3 class="text-xl font-bold mb-3">${s.title}</h3>
                    <p class="text-gray-400 text-xs leading-relaxed mb-6 flex-1">${s.desc}</p>
                    <ul class="space-y-4">
                        ${s.items.map((item) => `
                            <li class="text-[11px] text-gray-400 flex items-start gap-3">
                                <span class="text-blue-500 mt-0.5 shrink-0">🔹</span> 
                                <span class="leading-relaxed">${item}</span>
                            </li>
                        `).join('')}
                    </ul>
                </div>
            `).join('');
        }

        // 2. Render Produtos
        const productsGrid = document.getElementById('products-grid');
        if(productsGrid) {
            productsGrid.innerHTML = productsData.map((p, index) => `
                <div class="glass p-8 rounded-2xl relative bg-[#0a0a0a]/50 border-white/5 h-fit">
                    ${p.isNew ? `<span class="absolute top-4 right-4 bg-blue-500 text-white text-[9px] font-bold px-2 py-1 rounded">NOVO!</span>` : ''}
                    <div class="flex justify-between items-start mb-6">
                        <h3 class="text-xl font-bold max-w-[70%]">${p.name}</h3>
                        ${p.tag ? `<span class="text-blue-400 text-[10px] font-bold text-right">${p.tag.replace(' ', '<br>')}</span>` : ''}
                    </div>
                    <div class="flex items-center gap-2 text-gray-400 text-xs mb-6">
                        <span>🎧</span> Atendimento 24/7
                    </div>
                    <div class="mb-6">
                        <span class="text-gray-500 text-xs line-through block mb-1">R$ ${(p.price * 1.3).toFixed(2).replace('.', ',')}/mês</span>
                        <div class="flex items-baseline gap-1">
                            <span class="text-3xl font-bold text-white">R$ ${p.price.toFixed(2).replace('.', ',')}</span>
                            <span class="text-gray-500 text-xs">/mês</span>
                        </div>
                    </div>
                    <p class="text-[11px] text-gray-400 mb-6 h-8">${p.desc}</p>
                    
                    <button onclick="UI.toggleDetails(${index})" class="w-full py-3 bg-white/5 hover:bg-white/10 rounded-lg text-sm font-semibold transition flex justify-between px-6 items-center">
                        Detalhes <span id="icon-${index}" class="text-gray-500 text-lg">⌄</span>
                    </button>
                    
                    <div id="details-${index}" class="hidden mt-4 pt-4 border-t border-white/5 text-left transition-all max-h-64 overflow-y-auto pr-2 custom-scrollbar">
                        <ul class="space-y-3">
                            ${p.features.map((f) => `
                                <li class="text-[11px] text-gray-400 flex items-start gap-2">
                                    <span class="text-blue-500 shrink-0 mt-0.5">🔹</span> 
                                    <span class="leading-relaxed">${f}</span>
                                </li>
                            `).join('')}
                        </ul>
                    </div>
                </div>
            `).join('');
        }

        // 3. Render Feedbacks
        const feedbacksGrid = document.getElementById('feedbacks-grid');
        if (feedbacksGrid) {
            feedbacksGrid.innerHTML = feedbacksData.map((f) => `
                <div class="glass p-8 rounded-2xl bg-[#0a0a0a]/50 border-white/5 h-full">
                    <div class="flex items-center gap-4 mb-6">
                        <div class="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-sm font-bold">👤</div>
                        <div>
                            <h4 class="font-bold text-sm">${f.name}</h4>
                            <p class="text-[10px] text-gray-500">${f.role}</p>
                        </div>
                    </div>
                    <p class="text-[11px] text-gray-400 leading-relaxed text-justify">"${f.text}"</p>
                </div>
            `).join('');
        }
    }

    // 4. Render FAQ
    static renderFAQ() {
        const faqData = [
            { 
                question: "Como funciona o pagamento dos bots?",
                answer: "Aceitamos Pix, cartão de crédito e boleto. O pagamento é mensal e você pode cancelar a qualquer momento."
            },
            { 
                question: "O bot funciona em quantos servidores?",
                answer: "Isso depende do plano escolhido. O plano básico permite até 3 servidores, e os planos superiores permitem servidores ilimitados."
            },
            { 
                question: "Preciso ter conhecimento técnico para usar?",
                answer: "Não! Todos os nossos bots vêm com painel administrativo intuitivo e vídeo-aulas de configuração."
            },
            { 
                question: "Vocês oferecem suporte?",
                answer: "Sim! Oferecemos suporte 24/7 via Discord, WhatsApp e ticket no nosso sistema."
            },
            { 
                question: "Posso customizar o bot do meu jeito?",
                answer: "Com certeza! Todos os textos, cores e funcionalidades podem ser alterados pelo painel administrativo."
            },
            { 
                question: "Qual o tempo de entrega do bot após a compra?",
                answer: "A entrega é imediata! Você recebe o acesso ao painel em poucos minutos após a aprovação do pagamento."
            }
        ];

        const faqGrid = document.getElementById('faq-grid');
        if (faqGrid) {
            faqGrid.innerHTML = faqData.map((item, index) => `
                <div class="glass rounded-xl overflow-hidden">
                    <button onclick="UI.toggleFAQ(${index})" class="w-full p-4 text-left flex justify-between items-center hover:bg-white/5 transition">
                        <span class="text-sm font-semibold">${item.question}</span>
                        <span id="faq-icon-${index}" class="text-blue-500 text-lg">+</span>
                    </button>
                    <div id="faq-answer-${index}" class="hidden px-4 pb-4">
                        <p class="text-xs text-gray-400 leading-relaxed">${item.answer}</p>
                    </div>
                </div>
            `).join('');
        }
    }

    static toggleFAQ(index) {
        const answerDiv = document.getElementById(`faq-answer-${index}`);
        const iconSpan = document.getElementById(`faq-icon-${index}`);
        if (answerDiv && iconSpan) {
            if (answerDiv.classList.contains('hidden')) {
                answerDiv.classList.remove('hidden');
                iconSpan.innerText = '-';
            } else {
                answerDiv.classList.add('hidden');
                iconSpan.innerText = '+';
            }
        }
    }

    // 5. Animação de Números
    static animateCounters() {
        const counters = document.querySelectorAll('[data-count]');
        counters.forEach(counter => {
            const target = parseInt(counter.getAttribute('data-count'));
            const duration = 2000;
            const increment = target / (duration / 16);
            let current = 0;

            const updateCounter = () => {
                current += increment;
                if (current < target) {
                    counter.innerText = Math.floor(current).toLocaleString('pt-BR');
                    requestAnimationFrame(updateCounter);
                } else {
                    counter.innerText = target.toLocaleString('pt-BR') + (target === 98 ? '%' : target === 24 ? '/7' : '+');
                }
            };
            updateCounter();
        });
    }
}
window.onload = () => {
    UI.render();
    UI.renderFAQ();
    UI.animateCounters();
};
