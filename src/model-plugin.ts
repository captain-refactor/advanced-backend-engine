import { CodegenPlugin, Context, PluginResult } from "yengen/lib/pipeline";
import { Schema } from "./model-schema";

export interface ModelPluginContext extends Context {}

export interface ModelDefinition {
  name: string;
  schema: Schema;
}

export interface ModelPluginConfig {
  model: ModelDefinition;
}

export class ModelPlugin implements CodegenPlugin<ModelPluginContext> {
  constructor(protected config: ModelPluginConfig) {}

  async run(context: ModelPluginContext): Promise<PluginResult> {
    return {
      ok: true
    };
  }
}
