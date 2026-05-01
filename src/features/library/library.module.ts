import {Module} from "@nestjs/common";
import {AuthorController} from "@/features/library/author/author.controller";
import {CreateAuthorHandler} from "@/features/library/author/commands/create-author/create-author.handler";
import {UpdateAuthorHandler} from "@/features/library/author/commands/update-author/update-author.handler";
import {DeleteAuthorHandler} from "@/features/library/author/commands/delete-author/delete-author.handler";
import {GetAllAuthorHandler} from "@/features/library/author/query/get-all-author/get-all-author.handler";
import {GetOneAuthorHandler} from "@/features/library/author/query/get-one-author/get-one-author.handler";
import {BookCategoryController} from "@/features/library/book-category/book-category.controller";
import {CreateBookCategoryHandler} from "@/features/library/book-category/commands/create-book-category/create-book-category.handler";
import {UpdateBookCategoryHandler} from "@/features/library/book-category/commands/update-book-category/update-book-category.handler";
import {DeleteBookCategoryHandler} from "@/features/library/book-category/commands/delete-book-category/delete-book-category.handler";
import {GetAllBookCategoryHandler} from "@/features/library/book-category/query/get-all-book-category/get-all-book-category.handler";
import {GetOneBookCategoryHandler} from "@/features/library/book-category/query/get-one-book-category/get-one-book-category.handler";
import {BookController} from "@/features/library/book/book.controller";
import {CreateBookHandler} from "@/features/library/book/commands/create-book/create-book.handler";
import {UpdateBookHandler} from "@/features/library/book/commands/update-book/update-book.handler";
import {DeleteBookHandler} from "@/features/library/book/commands/delete-book/delete-book.handler";
import {GetAllBookHandler} from "@/features/library/book/query/get-all-book/get-all-book.handler";
import {GetOneBookHandler} from "@/features/library/book/query/get-one-book/get-one-book.handler";

@Module({
  controllers: [
    AuthorController,
    BookCategoryController,
    BookController,
  ],
  providers: [
    CreateAuthorHandler,
    UpdateAuthorHandler,
    DeleteAuthorHandler,
    GetAllAuthorHandler,
    GetOneAuthorHandler,
    CreateBookCategoryHandler,
    UpdateBookCategoryHandler,
    DeleteBookCategoryHandler,
    GetAllBookCategoryHandler,
    GetOneBookCategoryHandler,
    CreateBookHandler,
    UpdateBookHandler,
    DeleteBookHandler,
    GetAllBookHandler,
    GetOneBookHandler,
  ]
})
export class LibraryModule {}
