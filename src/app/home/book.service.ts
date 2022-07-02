import { Inject, Injectable } from "@angular/core";
import { Book } from "./home.component";

@Injectable({
    providedIn:'root'
})
export class BookService {
    books: Book[] = [
        {
            id: 1,
            nodeId: 'Book-1',
            title: 'book 1',
            description: 'it\'s book 1',
            coverMeshId: 'Book-1-Cover.001',
            paperMeshId: 'Book-1-Paper',
        },
        {
            id: 2,
            nodeId: 'Book-2',
            title: 'book 2',
            description: 'it\'s book 2',
            coverMeshId: 'Book-2-Cover',
            paperMeshId: 'Book-2-Paper',
        },
        {
            id: 3,
            nodeId: 'Book-3',
            title: 'book 3',
            description: 'it\'s book 3',
            coverMeshId: 'Book-3-Cover',
            paperMeshId: 'Book-3-Paper',
        },
        {
            id: 4,
            nodeId: 'Book-4',
            title: 'book 4',
            description: 'it\'s book 4',
            coverMeshId: 'Book-4-Cover',
            paperMeshId: 'Book-4-Paper',
        },
        {
            id: 5,
            nodeId: 'Book-5',
            title: 'book 5',
            description: 'it\'s book 6',
            coverMeshId: 'Book-5-Cover',
            paperMeshId: 'Book-5-Paper',
        },
    ]


    getBooks(): Book[] {
        return this.books;
    }
}