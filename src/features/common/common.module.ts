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
import {UsefulLinkController} from "@/features/common/useful-links/usefulLink.controller";
import {CreateUsefulLinkHandler} from "@/features/common/useful-links/command/create-useful-link/create-useful-link.handler";
import {GetAllUsefulLinkHandler} from "@/features/common/useful-links/query/get-all-useful-link/get-all-useful-link.handler";
import {GetOneUsefulLinkHandler} from "@/features/common/useful-links/query/get-one-useful-link/get-one-useful-link.handler";
import {DeleteUsefulLinkHandler} from "@/features/common/useful-links/command/delete-useful-link/delete-useful-link.handler";
import {UpdateUsefulLinkHandler} from "@/features/common/useful-links/command/update-useful-link/update-useful-link.handler";
import {CreateTagsHandler} from "@/features/common/tags/commands/create-tags/create-tags.handler";
import {GetAllTagsHandler} from "@/features/common/tags/query/get-all-tags/get-all-tags.handler";
import {GetOneTagsHandler} from "@/features/common/tags/query/get-one-tags/get-one-tags.handler";
import {DeleteTagsHandler} from "@/features/common/tags/commands/delete-tags/delete-tags.handler";
import {UpdateTagsHandler} from "@/features/common/tags/commands/update-tags/update-tags.handler";
import {TagsController} from "@/features/common/tags/tags-controller";
import {StaticInfoController} from "@/features/common/static-info/static-info.controller";
import {CreateStaticInfoHandler} from "@/features/common/static-info/command/create-static-info/create-static-info.handler";
import {UpdateStaticInfoHandler} from "@/features/common/static-info/command/update-static-info/update-static-info.handler";
import {DeleteStaticInfoHandler} from "@/features/common/static-info/command/delete-static-info/delete-static-info.handler";
import {GetAllStaticInfoHandler} from "@/features/common/static-info/query/get-all-static-info/get-all-static-info.handler";
import {GetOneStaticInfoHandler} from "@/features/common/static-info/query/get-one-static-info/get-one-static-info.handler";

@Module({
  controllers: [
    CountryController,
    LanguageController,
    SocialLinkController,
    UsefulLinkController,
    TagsController,
    StaticInfoController,
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
    GetOneSocialLinkHandler,
    CreateUsefulLinkHandler,
    GetAllUsefulLinkHandler,
    GetOneUsefulLinkHandler,
    DeleteUsefulLinkHandler,
    UpdateUsefulLinkHandler,
    CreateTagsHandler,
    GetAllTagsHandler,
    GetOneTagsHandler,
    DeleteTagsHandler,
    UpdateTagsHandler,
    CreateStaticInfoHandler,
    UpdateStaticInfoHandler,
    DeleteStaticInfoHandler,
    GetAllStaticInfoHandler,
    GetOneStaticInfoHandler,
  ]
})

export class CommonModule {
}