import { Component } from '@angular/core';
import { DatabaseService } from '../services/DatabaseService';
export interface ITalker {
    name: string;
    imageUrl: string;
    isFavorite: boolean;
}
@Component({
    templateUrl: 'build/pages/song-list/talker-list.html',
    providers: [DatabaseService]
})
export class TalkerListPage {
    talkers: Array<ITalker>;
    constructor(private databaseService: DatabaseService) {
        this.talkers = databaseService.getTalkersArray();
    }
    goToDetailView = (selectedTalker: ITalker): void => { /* ... */ }
}