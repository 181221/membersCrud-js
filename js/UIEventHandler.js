class UIEventHandler {
    constructor(ui, api){
        this.ui = ui;
        this.api = api;
        this.modalEdit = document.getElementById("memberModal-edit");
        this.modalAdd = document.getElementById("memberModal-add");
        this.modalAddClose = document.getElementById("close-add");
        this.modalEditClose = document.getElementById("close-edit");
        this.addForm = document.getElementById("modalform-add");
        this.editForm = document.getElementById("modalform-edit");
        this.addMemberbtn = document.getElementById("addMemberbtn");
        this.invokeEvent();
    }

    invokeEvent(){
        this.openCloseModal();
        this.windowEvent();
        this.add_onsubmit_editForm();
        this.add_onsubmit_addForm();
    }

    openCloseModal(){
        this.addMemberbtn.onclick = () => {this.modalAdd.style.display = "block";}
        this.modalAddClose.onclick = () => {this.modalEdit.style.display = "none"; this.modalAdd.style.display = "none"};
        this.modalEditClose.onclick = () => {this.modalEdit.style.display = "none"; this.modalAdd.style.display = "none"};
    }

    windowEvent(){
        window.onclick = (event) => {
            if (event.target == this.modalAdd) {
                this.modalAdd.style.display = "none";
            }else if(event.target == this.modalEdit) {
                this.modalEdit.style.display = "none";
            }
        } 
    }

    add_onsubmit_editForm(){
        this.editForm.onsubmit = (e) => {
            e.preventDefault();
            let updatedMember = {
                memberId: parseInt(e.target[0].value),
                firstname: e.target[1].value,
                lastname: e.target[2].value,
                address: e.target[3].value,
                phone: e.target[4].value
            }
            let index = this.ui.memberlist.findIndex(el => el.memberId === updatedMember.memberId);
            this.ui.updateMember(index, updatedMember);
            this.modalEdit.style.display = "none";
            this.ui.updateMemberUi(updatedMember);
            //this.api.xmlRequest('PUT','http://localhost:8080/Mservices/data/member', updatedMember)
        };
    }

    add_onsubmit_addForm() {
        this.addForm.onsubmit = (e) => {
            e.preventDefault();
            let newMember = {
                memberId: 3,
                firstname: e.target[0].value,
                lastname: e.target[1].value,
                address: e.target[2].value,
                phone: e.target[3].value
            }
            this.ui.addMember(newMember)
            this.modalAdd.style.display = "none";
        };
    }

    
};