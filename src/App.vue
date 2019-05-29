<template lang="pug">
  #app
    MyHeader

    .page#presentation(:class="{active : pageActive == 0}")
      span.title Apresentação
      p.content.
       Criado em 2013, o Curso de Licenciatura em Letras-Libras/Língua 
       Portuguesa da UFRN visa a formar professores para atuarem no ensino 
       de Língua Brasileira de Sinais e de Língua Portuguesa para surdos. 
       Funciona no turno da noite e tem duração de nove semestres (4 anos e 6 meses). 
       Suas língua de instrução são Libras e Língua Portuguesa na modalidade escrita. 
       O ingresso no curso acontece anualmente por meio de processo seletivo próprio 
       organizado pela COMPERVE (http://www.comperve.ufrn.br/), o qual é realizado 
       entre os meses de maio e julho, composto por duas etapas: Teste de Habilidades 
       Específicas, prova realizada em Libras; Redação, realizada em Língua Portuguesa 
       na modalidade escrita. A cada ano, 40 novas vagas são ofertadas.

      span.highlight Início do Curso: 
      span.highlight-content 2013.2

      br

      span.highlight Total de turmas: 
      span.highlight-content 4
      
      br

      span.highlight Duração do curso: 
      span.highlight-content 9 semestres

      br

      span.highlight Formação e Titulação: 
      span.highlight-content Licenciatura em  Letras – LIBRAS/Língua Portuguesa como Segunda Língua
      
      br
      span.highlight Coordenação do Programa: 
      span.highlight-content LARALIS NUNES DE SOUSA OLIVEIRA
      
      span.highlight Vice-coordenação do Programa: 
      span.highlight-content SIMONE LORENA DA SILVA PEREIRA

      p.content.small.
        Telefone/Ramal: (84) 3342-2220/2
        #[br]
        E-mail: #[a(href="mailto:coordletras.cchla@gmail.com") coordletras.cchla@gmail.com]
    
      br

      span.highlight Área de conhecimento CNPQ: 
      span.highlight-content Linguística, Letras e Artes
      
      br

      span.highlight Modalidade do curso: 
      span.highlight-content Presencial (Noturno)
      
      br

      span.highlight Endereço Alternativo: 
      span.highlight-content https://www.facebook.com/CLLLP/

    .page#calendar(:class="{active : pageActive == 2}")
      span.title Calendário
      table
        thead
          tr
            td 2019.1
        tbody
          tr
            td
              span.bold 09/01/2019 à 18/01/2019
              span → Matrícula para o período 2019.1.
          tr
            td
              span.bold 11/02/2019 à 12/02/2019
              span → Re-matrícula para o período 2019.1.
          tr
            td
              span.bold 11/02/2019 
              span → Início do período letivo 2019.1.
          tr
            td
              span.bold 18/02/2019
              span → Início do período trancamento de turma 2019.1.
          tr
            td
              span.bold 22/03/2019
              span → Término do período trancamento de turma 2019.1.
          tr
            td
              span.bold 29/06/2019
              span → Término do período letivo 2019.1.
      
      table
        thead
          tr
            td 2019.2
        tbody
          tr
            td
              span.bold 22/07/2019 
              span → Início do período letivo 2019.2.
          tr
            td
              span.bold 07/12/2019
              span → Término do período letivo 2019.2.

    .page#cd(:class="{active : pageActive == 1}")
      span.title Corpo Docente
      p.content.
        #[span.bold Ensino de LIBRAS]#[br]#[br]
        GISELE OLIVEIRA DA SILVA PAIVA (MESTRE)#[br]
        SIMONE PATRICIA SOARES DE SOUZA (ESPECIALISTA)#[br]
        EZEQUIEL ADNEY LIMA DA PAIXAO (ESPECIALISTA)
        #[br]#[br]
        #[span.bold Estudos Literários]#[br]#[br]
        ISAACK SAYMON ALVES FEITOZA SILVA (MESTRE)#[br]
        JOATAN DAVID FERREIRA DE MEDEIROS (MESTRE)
        #[br]#[br]
        #[span.bold Ensino de Português L2]#[br]#[br]
        JESSICA DO CARMO ALVES DE ANDRADE (ESPECIALISTA)
        #[br]#[br]
        #[span.bold Estudos Linguísticos]#[br]#[br]
        SIMONE LORENA DA SILVA PEREIRA (MESTRE)#[br]
        LARALIS NUNES DE SOUSA OLIVEIRA (MESTRE)
        #[br]#[br]
        #[span.bold Educação]#[br]#[br]
        FLAVIA ROLDAN VIANA (DOUTOR)#[br]

    .page#ppc(:class="{active : pageActive == 3}")
      span.title Projeto Pedagógico do Curso
      p.content.
        #[span.bold Perfil Profissional:]#[br]#[br]
        {{ppcText1}}#[br]#[br]
        #[ol #[li condições de uso das linguagens relacionando as habilidades básicas de falar, escutar, ler e escrever ao uso da LIBRAS;] #[li entendimento da língua como um produto sociocultural, relacionando o idioma com outras linguagens, inclusive as não–verbais (imagens, sinais, movimentos, virtuais, midiáticas, sonora, gestuais etc.);]#[li formação humanística, teórica e prática;]#[li capacidade de operar, sem preconceitos, com a pluralidade de expressão linguística, literária e cultural;]#[li atitude investigativa indispensável ao processo contínuo de construção do conhecimento na área;]#[li postura ética, autonomia intelectual, responsabilidade social, espírito crítico e consciência do seu papel de formador;] #[li domínio dos usos da Língua Brasileira de Sinais e da sua relação com a Língua Portuguesa como segunda língua para surdos]]
        #[br]
        #[span.bold Candidato(a) à Área:]#[br]#[br]
        Nenhum conteúdo disponível até o momento
        #[br]#[br]
        #[span.bold Competências e Habilidades do Profissional:]
        #[br]#[br]
        As Diretrizes Curriculares Nacionais e os Parâmetros Curriculares Nacionais (PCN) têm orientado projetos pedagógicos pautados no desenvolvimento de competências, não como o uso estático de regras apreendidas, já que são capacidades de mobilizar conhecimentos e habilidades em processos de ensino e aprendizagem. A competência implica ainda uma mobilização dos conhecimentos e esquemas que se possui para desenvolver respostas inéditas, criativas, eficazes para problemas novos. Em verdade, essa mobilização significa a utilização de variados recursos, de modo criativo e inovador quando for necessário.#[br]#[br]
        As Diretrizes Curriculares Nacionais e os PCN também orientam projetos pedagógicos pautados no desenvolvimento de habilidades, que, em geral, são consideradas como algo menos amplo do que as competências, já que estas estariam constituídas por aquelas. No entanto, há de se considerar que uma habilidade não se relaciona diretamente com apenas uma determinada competência, uma vez que uma mesma habilidade poderá colaborar com competências distintas. Desse modo, o processo de ensino e aprendizagem se desenvolve a partir de habilidades e competências vistas como objetivos de ensino, ou seja, se realiza na medida em que se ensine a comparar, classificar, analisar, discutir, descrever, opinar, julgar, fazer generalizações, analogias, diagnósticos, entre outras metas.#[br]#[br]
        Sendo assim, ao estudante do curso de Licenciatura em Letras – Língua Brasileira de Sinais/ Língua Portuguesa oportunizar-se-á um repertório de informações, habilidades e competências, composto por pluralidade de conhecimentos teóricos e práticos, afins a essa dimensão do conhecimento, que facilitará o exercício da docência e da pesquisa, fundamentando-se em princípios de interdisciplinaridade, contextualização, democratização, pertinência e relevância social, ética e sensibilidade afetiva e estética. Diante disso, espera-se que o estudante desse Curso desenvolva as seguintes habilidades e competências:#[br]#[br]
        #[ol(type="a") #[li Domínio do uso da Língua Brasileira de Sinais (LIBRAS) e da Língua Portuguesa, modalidade escrita, em termos de recepção e produção de textos;]#[li Domínio dos aspectos culturais próprios da comunidade surda;]#[li Domínio da metodologia de ensino da Língua Portuguesa para Surdos;]#[li Domínio da metodologia de ensino da Língua Brasileira de Sinais – LIBRAS; e. Reconhecimento e identificação de materiais didáticos e pedagógicos com base na pedagogia visual e em LIBRAS, entre outros;]#[li Reflexão analítica e crítica sobre a linguagem como fenômeno psicológico, educacional, social, histórico, cultural, político e ideológico;]#[li Visão crítica das perspectivas teóricas adotadas nas investigações linguísticas e literárias, que fundamentam sua formação profissional;]#[li Preparação profissional atualizada, de acordo com a dinâmica do mercado de trabalho;]#[li Compreensão de diferentes contextos interculturais;]#[li Visão crítica acerca da problemática ambiental numa perspectiva transdisciplinar;]#[li Utilização dos recursos de tecnologia assistiva;]#[li Domínio dos conteúdos básicos que são objeto dos processos de ensino e aprendizagem no ensino fundamental e médio;]#[li Domínio dos métodos e técnicas pedagógicas que permitam a transposição dos conhecimentos para os diferentes níveis de ensino e contextos educacionais. ]]
        #[br]
        #[span.bold Metodologia:]
        #[br]#[br]
        Para que o aluno adquira sólida formação teórica em todas as atividades curriculares, incluindo conteúdos especificamente pedagógicos, paralelamente em nossas disciplinas, dá-se ênfase à prática como atividade formadora do futuro profissional, propiciando, desde o primeiro semestre do curso, o conhecimento dos problemas da educação, da escola e do ensino, além da busca de soluções para esses problemas, com o auxílio de teorias e dos professores. Vale dizer, que mesmo nas disciplinas teóricas, há a preocupação de instrumentalizar o aluno para as questões da pesquisa e do ensino, direcionando os conhecimentos adquiridos como instrumentos de iniciação profissional.
        #[br]#[br]
        Nesse sentido, os primeiros semestres do curso apresentam disciplinas que preparam o aluno para uma integração mais efetiva com a realidade social. Também nos semestres subsequentes, o enfoque das disciplinas volta-se principalmente à articulação teoria/prática. Já nos semestres finais, busca-se alcançar essa articulação teoria/prática por meio de atividades direcionadas à docência, com a preocupação de um "saber-fazer" orientado por teorias que buscam responder às demandas colocadas pela realidade escolar.
        #[br]#[br]
        Em geral, a metodologia de ensino do curso busca estimular a inquietação, a dúvida, a provocação de novas ideias, a procura de novos métodos que trabalhem com situações reais da sociedade por meio de uma formação multidisciplinar. No transcorrer das Atividades Formadoras deste Currículo serão realizadas aulas expositivas; discussões sobre textos indicados; discussões sobre conteúdos ministrados e outras matérias de interesse filmadas em LIBRAS e/ou gravadas em CD ROM; discussões sobre trabalhos produzidos pelos alunos e estudos de casos. Como recursos, serão utilizados textos de bibliografia indicada; quadro; TV e filmes em DVD e Blu-ray; filmadora; Datashow; lousa interativa; computador em sala de aula com provedor de Internet disponível; sistema de amplificação sonora de grupo; CD ROMs em LIBRAS/Português escrito; dicionário virtual de LIBRAS/ Português escrito, entre outros.
        #[br]#[br]
        Quanto à língua portuguesa como segunda língua para surdos e à produção de textos escritos, seus respectivos componentes serão ministrados considerando-se as peculiaridades próprias do curso em tela. A proposta do curso visa, antes do mais, à melhoria da qualidade do ensino de Língua Portuguesa para alunos surdos, no que concerne à modalidade escrita. Tendo como suporte a Língua Brasileira de Sinais – LIBRAS –, nela se estará unificando tanto os conteúdos fundamentais do saber fazer textual quanto definindo a adoção de uma bibliografia básica a ser utilizada independentemente de quem seja o professor da matéria.
        #[br]#[br]
        Quanto à organização bilíngue do curso, de acordo com Botelho (2005, p. 16), mesmo que os professores sejam bem preparados e que conheçam a cultura surda e a língua de sinais, ainda não é suficiente, pois “não existe uma mesma língua compartilhada, circulando na sala de aula e na escola, condição indispensável para que os surdos tornem-se letrados”. Daí a relevância do aprendizado da modalidade escrita da Língua Portuguesa. Certamente, o que se pretende é promover um conhecimento reflexivo e crítico de construção e reconstrução expressional que permita ao aluno desenvolver as suas potencialidades nas duas línguas.
        #[br]#[br]
        #[span.bold Avaliação do Curso:] 3
        #[br]#[br]
        #[span.bold Projeto Pedagógico do Curso:]
        #[br]#[a(target="_blank" href="/PPC_LIBRAS_CONSEPE.pdf") Baixar Arquivo]
    .page#fluxogram(:class="{active : pageActive == 4}")
      span.title Fluxograma do Curso
      img(src="fluxogram.png")

    footer
      img(src="./assets/logo.white.svg")
      span.copy Developed by #[a(href="http://github.com/victorvieirar" target="_blank") Victor] at #[a(href="http://ufrn.br" target="_blank") UFRN]
</template>

<script>
import { MyHeader } from "./components";

export default {
  name: "app",
  data() {
    return {
      pageActive: 0,
      ppcText1:
        "Os profissionais egressos do curso serão formados com a possibilidade de atuarem na docência da educação básica, entre o 6ª e o 9ª anos do Ensino Fundamental e no Ensino Médio, com o ensino de Língua Portuguesa como segunda língua para surdos e de Língua Brasileira de Sinais, como primeira, em contextos escolares específicos e inclusivos. Poderão ainda desenvolver ações profissionais como corretores e redatores de textos, além das habilidades e competências para o ensino de Língua Portuguesa como segunda língua para surdos (cf.: QUADROS, 2006), de acordo com as contingências sociais e acadêmico-científicas da área, na contemporaneidade, ainda espera-se que esse egresso apresente:"
    };
  },
  components: {
    MyHeader
  }
};
</script>

<style src="./app.sass" lang="sass"></style>
