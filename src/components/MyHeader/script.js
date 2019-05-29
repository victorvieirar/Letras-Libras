export default {
  name: "MyHeader",
  data() {
    return {
      isHover1: false,
      isHover2: false
    };
  },
  methods: {
    selectMenu(id) {
      switch (id) {
        case 0:
          this.$parent.pageActive = 0;
          break;
        case 1:
          window.open(
            "https://sigaa.ufrn.br/sigaa/public/curso/curriculo.jsf?lc=pt_BR&id=118921874#",
            "_blank"
          );
          break;
        case 2:
          window.open(
            "https://sigaa.ufrn.br/sigaa/public/curso/monografias.jsf?lc=pt_BR&id=118921874",
            "_blank"
          );
          break;
        case 3:
          window.open(
            "https://sigaa.ufrn.br/sigaa/public/curso/artigos.jsf?lc=pt_BR&id=118921874",
            "_blank"
          );
          break;
        case 4:
          window.open(
            "https://sigaa.ufrn.br/sigaa/public/curso/memoriais.jsf?lc=pt_BR&id=118921874",
            "_blank"
          );
          break;
        case 5:
          window.open(
            "https://sigaa.ufrn.br/sigaa/public/curso/outros.jsf?lc=pt_BR&id=118921874",
            "_blank"
          );
          break;
        case 6:
          window.open(
            "https://sigaa.ufrn.br/sigaa/public/curso/turmas.jsf?lc=pt_BR&id=118921874#",
            "_blank"
          );
          break;
        case 7:
          this.$parent.pageActive = 1;
          break;
        case 8:
          this.$parent.pageActive = 2;
          break;
        case 9:
          this.$parent.pageActive = 3;
          break;
        case 10:
          window.open(
            "https://sigaa.ufrn.br/sigaa/public/curso/noticias.jsf?lc=pt_BR&id=118921874",
            "_blank"
          );
          break;
        case 11:
          window.open(
            "https://sigaa.ufrn.br/sigaa/public/curso/documentos.jsf?lc=pt_BR&id=118921874&idTipo=4",
            "_blank"
          );
          break;
        case 12:
          window.open(
            "https://sigaa.ufrn.br/sigaa/public/curso/documentos.jsf?lc=pt_BR&id=118921874&idTipo=1",
            "_blank"
          );
          break;
        case 13:
          this.$parent.pageActive = 4;
          break;
      }
    },

    leave() {
      setTimeout(() => {
        this.isHover1 = false;
        this.isHover2 = false;
      }, 200);
    }
  }
};
