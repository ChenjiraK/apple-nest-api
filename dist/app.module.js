"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const typeorm_1 = require("@nestjs/typeorm");
const profile_entity_1 = require("./profile/profile.entity");
const model_entity_1 = require("./model/model.entity");
const color_entity_1 = require("./color/color.entity");
const capacity_entity_1 = require("./capacity/capacity.entity");
const dashboard_entity_1 = require("./dashboard/dashboard.entity");
const profile_module_1 = require("./profile/profile.module");
const color_module_1 = require("./color/color.module");
const model_module_1 = require("./model/model.module");
const capacity_module_1 = require("./capacity/capacity.module");
const dashboard_module_1 = require("./dashboard/dashboard.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot(),
            typeorm_1.TypeOrmModule.forRoot({
                type: 'mysql',
                host: process.env.DB_HOST,
                port: Number(process.env.DB_PORT) || 3306,
                username: process.env.DB_USER,
                password: process.env.DB_PASSWORD,
                database: process.env.DB_NAME,
                entities: [
                    profile_entity_1.Profile,
                    model_entity_1.ModelEntity,
                    color_entity_1.ColorEntity,
                    capacity_entity_1.CapacityEntity,
                    dashboard_entity_1.Dashboard
                ],
                synchronize: true,
            }),
            profile_module_1.ProfileModule,
            color_module_1.ColorModule,
            model_module_1.ModelModule,
            capacity_module_1.CapacityModule,
            dashboard_module_1.DashboardModule,
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map