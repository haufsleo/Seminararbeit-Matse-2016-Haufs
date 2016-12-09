/* Die in XCode festgelegte appGroupId "evenAppGroup" und die Variable
   successfullWatchInit sind global verfuegbar oder ueber einen 
   entsprechenden Mechanismus (z.B. local storage) global erreichbar. */
var appGroupId = "evenAppGroup";
var successfullWatchInit = false;
// Bei Appstart wird aufgerufen:
var initPlattformAccess = () => {
    if (this.platform.is('ios')) { 
        applewatch.init(() => {
            // success
            successfullWatchInit = true;
        }, () => {
            // error
            successfullWatchInit = false;
        }, appGroupId);
    }
}
/* Definiton der zu sendenden Daten als JSON-Objekt */
var data = [{
        type: 'talk',
        title: 'Keynote',
        startDate: (new Date(2017, 1, 14, 08, 0, 0)).toISOString(),
        endDate: (new Date(2017, 1, 14, 10, 0, 0)).toISOString(),
        talkerName: 'Dr. Karl Mustermann',
        location: 'Grosser Hauptsaal',
        isFavorite: true
    }, /* ... */ ];
/* Senden an die Apple Watch als Teil der User Defaults */
if (successfullWatchInit) {
    applewatch.sendUserDefaults(() => {
        console.log("successfully send data");  // success
    }, () => {
        console.log("error sending data");      // error
    },
        { "database": JSON.stringify(data) }, appGroupId);
}