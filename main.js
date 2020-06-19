
document.querySelectorAll("[data-command]").forEach(
    item => {
      item.addEeventListener("click", e =>{

        console.log(item.getAttribute("data-command"));

      });
    }
  );

document.querySelectorAll("[data-tool]").forEach(
    item => {
      item.addEeventListener("click", e =>{

        console.log(item.getAttribute("data-tool"));

      });
    }
  );
