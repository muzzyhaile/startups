# n8n HTTP Request Body Parameters Configuration

## Problem
Using JSON body with template variables like `{{ $json.output.product_name }}` causes "JSON parameter needs to be valid JSON" error.

## Solution
Switch HTTP Request node from "JSON" to "Body Parameters" mode.

## Configuration Steps

1. **In your n8n HTTP Request node:**
   - Change "Body Content Type" from "JSON" to "Form-Data" or "Form-URL-Encoded"
   - OR use "Raw/Custom" with proper JSON construction

2. **Add these Body Parameters:**

| Parameter Name | Value |
|---|---|
| product_name | `{{ $json.output.product_name }}` |
| problem_statement | `{{ $json.output.problem_statement }}` |
| executive_summary | `{{ $json.output.executive_summary }}` |
| market_analysis.target_segment | `{{ $json.output.market_analysis.target_segment }}` |
| market_analysis.total_market | `{{ $json.output.market_analysis.total_market }}` |
| market_analysis.growth_rate | `{{ $json.output.market_analysis.growth_rate }}` |
| market_analysis.competition_level | `{{ $json.output.market_analysis.competition_level }}` |
| business_model.primary_model | `{{ $json.output.business_model.primary_model }}` |
| business_model.revenue_streams | `{{ $json.output.business_model.revenue_streams }}` |
| target_customer_personas | `{{ $json.output.target_customer_personas }}` |
| solution_overview | `{{ $json.output.solution_overview }}` |
| feasibility_assessment.technical_feasibility | `{{ $json.output.feasibility_assessment.technical_feasibility }}` |
| feasibility_assessment.market_demand | `{{ $json.output.feasibility_assessment.market_demand }}` |
| feasibility_assessment.competitive_advantage | `{{ $json.output.feasibility_assessment.competitive_advantage }}` |
| technology_stack.frontend | `{{ $json.output.technology_stack.frontend }}` |
| technology_stack.backend | `{{ $json.output.technology_stack.backend }}` |
| technology_stack.ai_models | `{{ $json.output.technology_stack.ai_models }}` |
| technology_stack.database | `{{ $json.output.technology_stack.database }}` |
| technology_stack.video_streaming | `{{ $json.output.technology_stack.video_streaming }}` |
| technology_stack.cloud_infrastructure | `{{ $json.output.technology_stack.cloud_infrastructure }}` |
| resource_requirements | `{{ $json.output.resource_requirements }}` |
| financial_projections | `{{ $json.output.financial_projections }}` |
| key_business_metrics.time_to_mvp | `{{ $json.output.key_business_metrics.time_to_mvp }}` |
| key_strengths | `{{ $json.output.key_strengths }}` |
| key_challenges | `{{ $json.output.key_challenges }}` |
| go_to_market_strategy | `{{ $json.output.go_to_market_strategy }}` |
| success_metrics_kpis | `{{ $json.output.success_metrics_kpis }}` |
| risk_assessment_and_mitigation | `{{ $json.output.risk_assessment_and_mitigation }}` |
| recommended_next_steps | `{{ $json.output.recommended_next_steps }}` |

## Alternative: Use Code Node

If you need JSON format, use a **Code Node** before the HTTP Request:

```javascript
// Code Node to construct JSON
const payload = {
  product_name: $json.output.product_name,
  problem_statement: $json.output.problem_statement,
  executive_summary: $json.output.executive_summary,
  market_analysis: {
    target_segment: $json.output.market_analysis.target_segment,
    total_market: $json.output.market_analysis.total_market,
    growth_rate: $json.output.market_analysis.growth_rate,
    competition_level: $json.output.market_analysis.competition_level
  },
  business_model: {
    primary_model: $json.output.business_model.primary_model,
    revenue_streams: $json.output.business_model.revenue_streams
  },
  target_customer_personas: $json.output.target_customer_personas,
  solution_overview: $json.output.solution_overview,
  feasibility_assessment: {
    technical_feasibility: $json.output.feasibility_assessment.technical_feasibility,
    market_demand: $json.output.feasibility_assessment.market_demand,
    competitive_advantage: $json.output.feasibility_assessment.competitive_advantage
  },
  technology_stack: {
    frontend: $json.output.technology_stack.frontend,
    backend: $json.output.technology_stack.backend,
    ai_models: $json.output.technology_stack.ai_models,
    database: $json.output.technology_stack.database,
    video_streaming: $json.output.technology_stack.video_streaming,
    cloud_infrastructure: $json.output.technology_stack.cloud_infrastructure
  },
  resource_requirements: $json.output.resource_requirements,
  financial_projections: $json.output.financial_projections,
  key_business_metrics: {
    time_to_mvp: $json.output.key_business_metrics.time_to_mvp
  },
  key_strengths: $json.output.key_strengths,
  key_challenges: $json.output.key_challenges,
  go_to_market_strategy: $json.output.go_to_market_strategy,
  success_metrics_kpis: $json.output.success_metrics_kpis,
  risk_assessment_and_mitigation: $json.output.risk_assessment_and_mitigation,
  recommended_next_steps: $json.output.recommended_next_steps
};

return [{ json: payload }];
```

Then use `{{ $json }}` in the HTTP Request body.
