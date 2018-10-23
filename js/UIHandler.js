class UIHandler {
    constructor(memberlist){
        this._memberlist = memberlist;
        this.createApp();
        this.table = document.getElementById("membertable");
    }

    createApp() {
        document.getElementById("app").innerHTML = `
        <div>
            <h1>Team members</h1>
            <div div class="container">
                ${this.MemberTemplate()}
            </div>
        </div>
        `;
    }

    addMember(m){
        this._memberlist.push(m);
        let tr = document.createElement("TR");
        tr.innerHTML = this.MemberTableRow(m);
        this.table.appendChild(tr);
    }

    updateMemberUi(m){
        let tr = document.getElementById("row-"+m.memberId);
        tr.innerHTML = this.MemberTableRow(m);
    }

    deleteMember(m){
        console.log("delete member ",m)
        this._memberlist.filter(mem => {
            return mem.memberId !== m.memberId;
        })
        this.table.deleteRow(m === 1 ? m : m-1)
    }

    editMember(m){
        let modal = document.getElementById("memberModal-edit");
        let editForm = document.getElementById("modalform-edit");
        let member = this._memberlist.find( member => member.memberId === m );
        editForm.elements[0].value = member.memberId
        editForm.elements[1].value = member.firstname
        editForm.elements[2].value = member.lastname
        editForm.elements[3].value = member.address
        editForm.elements[4].value = member.phone
        modal.style.display = 'block';
    }
    
    getMember(id){
        this._memberlist.find( member => member.memberId === id );
    }
    
    MemberTemplate(){
        return `
           <div class="container">
            <table id="membertable">
            <thead>
                <tr>
                    <th>Firstname</th>
                    <th>Lastname</th>
                    <th>Address</th>
                    <th>Phone</th>
                    <th></th>
                </tr>
            </thead>
             <tbody id="memberTableBody">
                <div id="member-rows">${this._memberlist.map(member => this.MemberTableRow(member)).join("")}</div>
             </tbody>
            </table>
            <button id="addMemberbtn">Add Member</button>
            <div>
                ${this.createModal("Add Member", "post")}
                ${this.createModal("Update Member", "put")}
            </div>
           </div> 
        `
    }

    MemberTableRow(member){
        return `
            <tr id="row-${member.memberId}">
                <td>${member.firstname}</td>
                <td>${member.lastname}</td>
                <td>${member.address}</td>
                <td>${member.phone}</td>
                <td>
                    <button onclick="ui.deleteMember(${member.memberId})">Delete</button>
                    <button id="openEditModal" onclick="ui.editMember(${member.memberId})">Edit</button>
                </td>
            </tr>
        `;
    }

    createModal(text, action, m = 'undefined'){
        let id = action === 'post' ? 'add' : 'edit';
        return `
          <div id="memberModal-${id}" class="modal">
            <div class="modal-content">
             <span class="close" id="close-${id}">&times;</span>
               <form id="modalform-${id}">
                    <div><input id="id" type="hidden" name="id"/></div>
                    <div>Firstname: <input id="firstname" type="text" name="firstname" placeholder="firstname"/></div>
                    <div>Lastname: <input id="lastname" type="text" name="lastname" placeholder="lastname" /></div>
                    <div>Address: <input type="text" name="address" placeholder="address"/></div>
                    <div>Phone: <input type="text" name="phone" placeholder="phone"/></div>
                    <button>${text}</button>
               </form>
            </div>
          </div>
        `;
    }
    
    updateMember(index, member){
        this._memberlist[index] = member;
    }

    get memberlist(){
        return this._memberlist;
    }

    set memberlist(m){
        console.log("Setting members")
        this._memberlist = [...m];
    }

    
    
}