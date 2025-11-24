import { Controller, Get, Post } from '@nestjs/common';
import { LibraryService } from './library.service';
import { Library } from './schemas/library.schema';

@Controller('library')
export class LibraryController {

    constructor(private readonly libraryService: LibraryService){};


    @Post()
    async createLibrary(): Promise<Library> {
        return this.libraryService.createLibrary();
    }

    @Get()
    async getLibraries(): Promise<Library[]> {
        return this.libraryService.getLibraries();
    }

}
