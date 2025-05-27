import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ReactionGateway } from './gateways/reaction.gateway'; // Ajusta la ruta si tuvieras otra estructura


@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, ReactionGateway],
})
export class AppModule {}
