import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type StripeEventDocument = HydratedDocument<StripeEvent>;

@Schema({ timestamps: true, collection: 'stripe_events' })
export class StripeEvent {

    @Prop({ unique: true })
    eventId: string;

    @Prop()
    eventType: string;
}

export const StripeEventSchema = SchemaFactory.createForClass(StripeEvent);
