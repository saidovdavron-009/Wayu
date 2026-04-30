import {Module} from "@nestjs/common";
import {CountryController} from "@/features/common/countries/country.controller";
import {GetAllCountryHandler} from "@/features/common/countries/query/get-all-country/get-all-country.handler";
import {CreateCountryHandler} from "@/features/common/countries/command/create-country/create-country.handler";
import {GetOneCountryHandler} from "@/features/common/countries/query/get-one-country/get-one-country.handler";
import {DeleteCountryHandler} from "@/features/common/countries/command/delete-country/delete-country.handler";
import {UpdateCountryHandler} from "@/features/common/countries/command/update-country/update-country.handler";
import {LanguageController} from "@/features/common/languages/language.controller";
import {CreateLanguageHandler} from "@/features/common/languages/commands/create-language/create-language.handler";
import {GetAllLanguageHandler} from "@/features/common/languages/queries/get-all-language/get-all-language.handler";
import {GetOneLanguageHandler} from "@/features/common/languages/queries/get-one-language/get-one-language.handler";
import {DeleteLanguageHandler} from "@/features/common/languages/commands/delete-language/delete-language.handler";
import {UpdateLanguageHandler} from "@/features/common/languages/commands/update-language/update-language.handler";
import {SocialLinkController} from "@/features/common/social-links/socialLink.controller";
import {CreateSocialLinkHandler} from "@/features/common/social-links/command/create-social-link/create-social-link.handler";
import {DeleteSocialLinkHandler} from "@/features/common/social-links/command/delete-social-link/delete-social-link.handler";
import {UpdateSocialLinkHandler} from "@/features/common/social-links/command/update-social-link/update-social-link.handler";
import {GetAllSocialLinkHandler} from "@/features/common/social-links/query/get-all-social-link/get-all-social-link.handler";
import {GetOneSocialLinkHandler} from "@/features/common/social-links/query/get-one-social-link/get-one-social.link.handler";

@Module({
  controllers: [
    CountryController,
    LanguageController,
    SocialLinkController
  ],
  providers: [
    GetAllCountryHandler,
    CreateCountryHandler,
    GetOneCountryHandler,
    DeleteCountryHandler,
    UpdateCountryHandler,
    CreateLanguageHandler,
    GetAllLanguageHandler,
    GetOneLanguageHandler,
    DeleteLanguageHandler,
    UpdateLanguageHandler,
    CreateSocialLinkHandler,
    DeleteSocialLinkHandler,
    UpdateSocialLinkHandler,
    DeleteSocialLinkHandler,
    GetAllSocialLinkHandler,
    GetOneSocialLinkHandler
  ]
})

export class CommonModule {
}