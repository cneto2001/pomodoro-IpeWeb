Pomo Flow
Aumente seu foco!
📘 Visão Geral
Pomo Flow é uma aplicação que combina a técnica Pomodoro com uma lista de
tarefas integrada. O objetivo é aumentar a produtividade com ciclos de trabalho
focado intercalados com pausas, além de permitir o gerenciamento de tarefas.
🧠 Técnica Pomodoro no App
Aumente seu foco!
📘 Visão Geral
Pomo Flow é uma aplicação que combina a técnica Pomodoro com uma lista de
tarefas integrada. O objetivo é aumentar a produtividade com ciclos de trabalho
focado intercalados com pausas, além de permitir o gerenciamento de tarefas.
🧠 Técnica Pomodoro no App
A lógica do fluxo segue este padrão:
1. Foco: 25 minutos
2. Pausa curta: 5 minutos
3. Foco: 25 minutos
4. Pausa longa: 15 minutos
5. O ciclo reinicia a partir do passo 1.
O app faz essa transição automaticamente entre sessões e pausas.
🖥
🕒 Pomo Flow 1
🖥 Interface do Usuário
🎯 Temporizador
Exibe o tempo da sessão atual.
Botões disponíveis:
Iniciar : Começa o ciclo atual.
Resetar : Retorna o tempo ao início da sessão.
✅ Lista de Tarefas
Campo para adicionar uma nova tarefa.
Botão + adiciona a tarefa na lista.
Tarefas aparecem logo abaixo, podendo ser marcadas como concluídas
(dependendo da implementação futura).
⚙️ Configurações de Tempo
Acessadas pelo ícone de engrenagem no topo.
Campos ajustáveis:
Sessão de Foco (minutos)
Pausa Curta (minutos)
Pausa Longa (minutos)
🔄 Ciclo Automático
O ciclo é executado automaticamente da seguinte forma:
1. O usuário inicia o cronômetro em uma sessão de foco.
2. Ao fim dos 25 minutos, o app inicia automaticamente uma pausa curta de 5
minutos.
3. Depois da pausa, inicia uma nova sessão de foco.
4. Após essa segunda sessão, o app inicia uma pausa longa de 15 minutos.
🕒 Pomo Flow 2
5. O ciclo então reinicia.
💾 Persistência com Local Storage
Para garantir que as configurações e tarefas do usuário sejam mantidas mesmo
após fechar ou atualizar a página, o Pomo Flow utiliza o Local Storage do
navegador. Isso inclui:
📝 Tarefas adicionadas pelo usuário
🛠 Configurações personalizadas de tempo
Como funciona:
Sempre que uma nova tarefa for adicionada ou marcada como concluída, ela
será salva no Local Storage.
As alterações nas durações de foco, pausa curta ou longa também serão
salvas automaticamente.
Ao carregar o app, os dados são lidos do Local Storage e restauram o estado
anterior.
