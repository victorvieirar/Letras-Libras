export default {
  name: "MyHeader",
  data() {
    return {
      isHover: false
    };
  },
  methods: {
    selectMenu(id) {
      switch (id) {
        case 0:
          window.open(
            "https://sigaa.ufrn.br/sigaa/public/curso/curriculo.jsf?lc=pt_BR&id=118921874#",
            "_blank"
          );
          break;
      }
    },

    leave() {
      setTimeout(() => {
        this.isHover = false;
      }, 200);
    }
  }
};
