#!/bin/bash

# Dynamic curl script for Supabase Edge Function
# This version uses variables to generate unique startup ideas

# Arrays of different startup idea components for randomization
PRODUCT_NAMES=(
  "AI-Powered Customer Service Platform"
  "Smart Home Automation Hub" 
  "Blockchain Supply Chain Tracker"
  "Virtual Reality Fitness Coach"
  "IoT Agricultural Monitor"
  "Social Media Content Optimizer"
  "Voice-Activated Task Manager"
  "Predictive Maintenance System"
  "Digital Health Companion"
  "Sustainable Energy Manager"
)

PROBLEMS=(
  "Businesses struggle with inefficient customer support that leads to poor user experience and high operational costs"
  "Homeowners lack centralized control over their smart devices, leading to energy waste and security vulnerabilities"
  "Companies have no transparency in their supply chains, making it difficult to verify authenticity and sustainability"
  "People find it hard to stay motivated with traditional fitness routines and lack personalized guidance"
  "Farmers struggle with crop monitoring and optimization, leading to reduced yields and wasted resources"
  "Content creators spend too much time on manual social media management instead of creating quality content"
  "Professionals get overwhelmed with task management and lose productivity due to scattered workflows"
  "Equipment failures cause unexpected downtime and maintenance costs for manufacturing companies"
  "Individuals struggle to track and manage their health data across multiple platforms and devices"
  "Businesses and households lack insights into their energy consumption patterns and optimization opportunities"
)

CATEGORIES=(
  "AI & Technology"
  "Smart Home"
  "Blockchain"
  "HealthTech"
  "AgTech"
  "MarTech"
  "Productivity"
  "Manufacturing"
  "HealthTech"
  "CleanTech"
)

TARGET_MARKETS=(
  "Small and medium businesses"
  "Tech-savvy homeowners"
  "Supply chain managers"
  "Fitness enthusiasts"
  "Agricultural producers"
  "Content creators and marketers"
  "Business professionals"
  "Manufacturing companies"
  "Health-conscious individuals"
  "Environmentally conscious consumers"
)

REVENUE_MODELS=(
  "Subscription-based SaaS"
  "Freemium with premium features"
  "Usage-based pricing"
  "Enterprise licensing"
  "Marketplace commission"
  "Hardware + software bundle"
)

# Generate random index
RANDOM_INDEX=$((RANDOM % ${#PRODUCT_NAMES[@]}))

# Select random components
PRODUCT_NAME="${PRODUCT_NAMES[$RANDOM_INDEX]}"
PROBLEM_STATEMENT="${PROBLEMS[$RANDOM_INDEX]}"
CATEGORY="${CATEGORIES[$RANDOM_INDEX]}"
TARGET_MARKET="${TARGET_MARKETS[$RANDOM_INDEX]}"
REVENUE_MODEL="${REVENUE_MODELS[$((RANDOM % ${#REVENUE_MODELS[@]}))]}"

# Generate dynamic executive summary
EXECUTIVE_SUMMARY="A innovative $CATEGORY platform that addresses $TARGET_MARKET needs through advanced technology and streamlined user experience"

# Random financial projections
REVENUE_AMOUNT="$$(($RANDOM % 5 + 1)).$(($RANDOM % 9 + 1))M"
TIME_TO_MVP="$(($RANDOM % 6 + 6))-$(($RANDOM % 6 + 12)) months"

echo "Generating startup idea with:"
echo "Product: $PRODUCT_NAME"
echo "Category: $CATEGORY"
echo "Revenue: $REVENUE_AMOUNT"
echo ""

# Make the curl request with variables
curl -X POST "https://hxxjkmgznhhvvmpokfih.supabase.co/functions/v1/sync-ideas" \
  -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh4eGprbWd6bmhodnZtcG9rZmloIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjcyOTcxMTEsImV4cCI6MjA0Mjg3MzExMX0.NQgQz6SHPz6sGCEMAlnDNZmE6SQNT8HEa6-6q1WDZlE" \
  -H "Content-Type: application/json" \
  -d "{
    \"product_name\": \"$PRODUCT_NAME\",
    \"problem_statement\": \"$PROBLEM_STATEMENT\",
    \"executive_summary\": \"$EXECUTIVE_SUMMARY\",
    \"market_analysis\": {
      \"target_segment\": \"$CATEGORY\",
      \"total_market\": \"$TARGET_MARKET\"
    },
    \"business_model\": {
      \"primary_model\": \"$REVENUE_MODEL\"
    },
    \"resource_requirements\": [
      {
        \"role\": \"Software Developer\",
        \"salary\": \"\$$(($RANDOM % 40 + 60)),000/year\"
      }
    ],
    \"financial_projections\": [
      {
        \"year\": 2025,
        \"revenue\": \"$REVENUE_AMOUNT\"
      }
    ],
    \"key_business_metrics\": {
      \"time_to_mvp\": \"$TIME_TO_MVP\"
    },
    \"key_strengths\": [
      \"Advanced technology integration\",
      \"Scalable architecture\",
      \"User-friendly interface\"
    ],
    \"key_challenges\": [
      \"Market competition\",
      \"User acquisition costs\"
    ],
    \"go_to_market_strategy\": [
      \"Digital marketing campaigns\",
      \"Partnership development\",
      \"Content marketing\"
    ],
    \"success_metrics_kpis\": [
      \"User engagement rates\",
      \"Revenue growth\",
      \"Customer satisfaction scores\"
    ],
    \"risk_assessment_and_mitigation\": [
      {
        \"risk\": \"Market saturation\",
        \"likelihood\": \"Medium\",
        \"impact\": \"High\",
        \"mitigation\": \"Focus on unique value proposition and niche markets\"
      }
    ],
    \"recommended_next_steps\": [
      \"Develop MVP with core features\",
      \"Conduct market validation\",
      \"Secure initial funding\"
    ]
  }"

echo ""
echo "Startup idea submitted successfully!"
