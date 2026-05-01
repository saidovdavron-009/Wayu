import {Module} from "@nestjs/common";
import {QuestionController} from "@/features/support/questions/question.controller";
import {CreateQuestionHandler} from "@/features/support/questions/command/create-question/create-question.handler";
import {UpdateQuestionHandler} from "@/features/support/questions/command/update-question/update-question.handler";
import {DeleteQuestionHandler} from "@/features/support/questions/command/delete-question/delete-question.handler";
import {GetAllQuestionHandler} from "@/features/support/questions/query/get-all-question/get-all-question.handler";
import {GetOneQuestionHandler} from "@/features/support/questions/query/get-one-question/get-one-question.handler";
import {FaqController} from "@/features/support/faqs/faq.controller";
import {CreateFaqHandler} from "@/features/support/faqs/commands/create-faq/create-faq.handler";
import {UpdateFaqHandler} from "@/features/support/faqs/commands/update-faq/update-faq.handler";
import {DeleteFaqHandler} from "@/features/support/faqs/commands/delete-faq/delete-faq.handler";
import {GetAllFaqHandler} from "@/features/support/faqs/query/get-all-faq/get-all-faq.handler";
import {GetOneFaqHandler} from "@/features/support/faqs/query/get-one-faq/get-one-faq.handler";
import {FaqsTagsController} from "@/features/support/faqs-tags/faqs-tags.controller";
import {CreateFaqsTagHandler} from "@/features/support/faqs-tags/command/create-faqs-tag/create-faqs-tag.handler";
import {DeleteFaqsTagHandler} from "@/features/support/faqs-tags/command/delete-faqs-tag/delete-faqs-tag.handler";

@Module({
  controllers: [
    QuestionController,
    FaqController,
    FaqsTagsController
  ],
  providers: [
    CreateQuestionHandler,
    UpdateQuestionHandler,
    DeleteQuestionHandler,
    GetAllQuestionHandler,
    GetOneQuestionHandler,
    CreateFaqHandler,
    UpdateFaqHandler,
    DeleteFaqHandler,
    GetAllFaqHandler,
    GetOneFaqHandler,
    CreateFaqsTagHandler,
    DeleteFaqsTagHandler
  ]
})
export class SupportModule {}
