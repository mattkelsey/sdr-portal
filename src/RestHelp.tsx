export class RestHelp {

  private baseURL: string = "https://api.seattledrone.repair/";

  public getRepair(repairId: string) {
    fetch(this.baseURL + "repair/" + repairId)
      .then(res => console.info(res.json()));

  }

  /* , {
    method: 'POST',
    body: JSON.stringify(),
    headers: { 'Content-Type': 'application/json' }
  }
*/



  // private testPost = {
  //   'firstName': 'Kale',
  //   'repairId': generateRepairId()
  //  };

   // private generateRepairId(){
   //   var chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
   //   var result = '';
   //   for (var i = 7; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
   //   return result;
   // }

}
