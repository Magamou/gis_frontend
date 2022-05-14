export const GetMap=(imap:string): any =>{
    var map = new Microsoft.Maps.Map(imap, {
        credentials:'Ams581aR0adsR3ZshnyTnH9n9-Ua68q_WetLVX483Icc3j-d6n_QSfHDVYzitfGB',
        center:new Microsoft.Maps.Location(
            14.819170607370777,
            -17.252734443890954
            )
    });
    return map;
   
}