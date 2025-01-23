import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
//entity
import { Profile } from './profile/profile.entity';
import { ModelEntity } from './model/model.entity';
import { ColorEntity } from './color/color.entity';
import { CapacityEntity } from './capacity/capacity.entity';
import { Dashboard } from './dashboard/dashboard.entity';
// module
import { ProfileModule } from './profile/profile.module';
import { ColorModule } from './color/color.module';
import { ModelModule } from './model/model.module';
import { CapacityModule } from './capacity/capacity.module';
import { DashboardModule } from './dashboard/dashboard.module';
@Module({
  imports: [
    ConfigModule.forRoot(), // Load .env file
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT) || 3306,
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [
        Profile, 
        ModelEntity, 
        ColorEntity,
        CapacityEntity,
        Dashboard
      ],
      synchronize: true,
    }),
    ProfileModule,
    ColorModule,
    ModelModule,
    CapacityModule,
    DashboardModule,
  ],
})
export class AppModule {}
