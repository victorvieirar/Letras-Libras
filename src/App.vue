<template lang="pug">
  #app
    MyHeader

    #presentation
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
</template>

<script>
import { MyHeader } from "./components";

export default {
  name: "app",
  components: {
    MyHeader
  }
};
</script>

<style src="./app.sass" lang="sass"></style>
