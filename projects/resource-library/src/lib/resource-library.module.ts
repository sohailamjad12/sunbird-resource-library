import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {CommonFormElementsModule} from 'upsmf-common-form-elements-web';
import {SuiModule} from 'ng2-semantic-ui-v9';
import {InfiniteScrollModule} from 'ngx-infinite-scroll';
import {HttpClientModule} from '@angular/common/http';
import {ResourceLibraryComponent} from './resource-library.component';
import {ContentPlayerPageComponent} from './components/content-player-page/content-player-page.component';
import {LibraryComponent} from './components/library/library.component';
import {LibraryFilterComponent} from './components/library-filter/library-filter.component';
import {LibraryListComponent} from './components/library-list/library-list.component';
import {LibraryPlayerComponent} from './components/library-player/library-player.component';
import {SkeletonLoaderComponent} from './components/skeleton-loader/skeleton-loader.component';
import {SunbirdPdfPlayerModule} from '@project-sunbird/sunbird-pdf-player-v9';
import {SunbirdVideoPlayerModule} from '@project-sunbird/sunbird-video-player-v9';
import {QumlLibraryModule} from 'sunbird-quml-player-exam';
import {CarouselModule} from 'ngx-bootstrap/carousel';
import {TelemetryInteractDirective} from './directives/telemetry-interact/telemetry-interact.directive';
import {CacheService} from 'ng2-cache-service';
import {CacheStorageAbstract} from 'ng2-cache-service/dist/src/services/storage/cache-storage-abstract.service';
import {CacheSessionStorage} from 'ng2-cache-service/dist/src/services/storage/session-storage/cache-session-storage.service';
import {QumlPlayerComponent} from './components/quml-player/quml-player.component';
import { InterpolatePipe } from './pipes/interpolate/interpolate.pipe';
@NgModule({
    declarations: [
        ResourceLibraryComponent, ContentPlayerPageComponent,
        LibraryComponent, LibraryFilterComponent, LibraryListComponent,
        LibraryPlayerComponent, SkeletonLoaderComponent, TelemetryInteractDirective,
        QumlPlayerComponent, InterpolatePipe
    ],
    imports: [
        CommonModule, FormsModule, ReactiveFormsModule, RouterModule.forChild([]), SuiModule,
        CommonFormElementsModule, InfiniteScrollModule, HttpClientModule, SunbirdPdfPlayerModule, SunbirdVideoPlayerModule,
        QumlLibraryModule, CarouselModule
    ],
    providers: [
        CacheService,
        {provide: CacheStorageAbstract, useClass: CacheSessionStorage}
    ],
    exports: [
        LibraryComponent
    ]
})
export class ResourceLibraryModule {
}
