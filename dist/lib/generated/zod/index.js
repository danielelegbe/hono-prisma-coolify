import { z } from 'zod';
/////////////////////////////////////////
// HELPER FUNCTIONS
/////////////////////////////////////////
/////////////////////////////////////////
// ENUMS
/////////////////////////////////////////
export const TransactionIsolationLevelSchema = z.enum(['ReadUncommitted', 'ReadCommitted', 'RepeatableRead', 'Serializable']);
export const PostScalarFieldEnumSchema = z.enum(['id', 'createdAt', 'updatedAt', 'title', 'content', 'published']);
export const ProfileScalarFieldEnumSchema = z.enum(['id', 'email']);
export const SortOrderSchema = z.enum(['asc', 'desc']);
export const QueryModeSchema = z.enum(['default', 'insensitive']);
export const NullsOrderSchema = z.enum(['first', 'last']);
/////////////////////////////////////////
// MODELS
/////////////////////////////////////////
/////////////////////////////////////////
// POST SCHEMA
/////////////////////////////////////////
export const PostSchema = z.object({
    id: z.string().uuid(),
    createdAt: z.coerce.date(),
    updatedAt: z.coerce.date(),
    title: z.string(),
    content: z.string().nullable(),
    published: z.boolean(),
});
/////////////////////////////////////////
// PROFILE SCHEMA
/////////////////////////////////////////
export const ProfileSchema = z.object({
    id: z.string(),
    email: z.string(),
});
/////////////////////////////////////////
// SELECT & INCLUDE
/////////////////////////////////////////
// POST
//------------------------------------------------------
export const PostSelectSchema = z.object({
    id: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    title: z.boolean().optional(),
    content: z.boolean().optional(),
    published: z.boolean().optional(),
}).strict();
// PROFILE
//------------------------------------------------------
export const ProfileSelectSchema = z.object({
    id: z.boolean().optional(),
    email: z.boolean().optional(),
}).strict();
/////////////////////////////////////////
// INPUT TYPES
/////////////////////////////////////////
export const PostWhereInputSchema = z.object({
    AND: z.union([z.lazy(() => PostWhereInputSchema), z.lazy(() => PostWhereInputSchema).array()]).optional(),
    OR: z.lazy(() => PostWhereInputSchema).array().optional(),
    NOT: z.union([z.lazy(() => PostWhereInputSchema), z.lazy(() => PostWhereInputSchema).array()]).optional(),
    id: z.union([z.lazy(() => UuidFilterSchema), z.string()]).optional(),
    createdAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
    updatedAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
    title: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    content: z.union([z.lazy(() => StringNullableFilterSchema), z.string()]).optional().nullable(),
    published: z.union([z.lazy(() => BoolFilterSchema), z.boolean()]).optional(),
}).strict();
export const PostOrderByWithRelationInputSchema = z.object({
    id: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    title: z.lazy(() => SortOrderSchema).optional(),
    content: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
    published: z.lazy(() => SortOrderSchema).optional()
}).strict();
export const PostWhereUniqueInputSchema = z.object({
    id: z.string().uuid()
})
    .and(z.object({
    id: z.string().uuid().optional(),
    AND: z.union([z.lazy(() => PostWhereInputSchema), z.lazy(() => PostWhereInputSchema).array()]).optional(),
    OR: z.lazy(() => PostWhereInputSchema).array().optional(),
    NOT: z.union([z.lazy(() => PostWhereInputSchema), z.lazy(() => PostWhereInputSchema).array()]).optional(),
    createdAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
    updatedAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
    title: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    content: z.union([z.lazy(() => StringNullableFilterSchema), z.string()]).optional().nullable(),
    published: z.union([z.lazy(() => BoolFilterSchema), z.boolean()]).optional(),
}).strict());
export const PostOrderByWithAggregationInputSchema = z.object({
    id: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    title: z.lazy(() => SortOrderSchema).optional(),
    content: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
    published: z.lazy(() => SortOrderSchema).optional(),
    _count: z.lazy(() => PostCountOrderByAggregateInputSchema).optional(),
    _max: z.lazy(() => PostMaxOrderByAggregateInputSchema).optional(),
    _min: z.lazy(() => PostMinOrderByAggregateInputSchema).optional()
}).strict();
export const PostScalarWhereWithAggregatesInputSchema = z.object({
    AND: z.union([z.lazy(() => PostScalarWhereWithAggregatesInputSchema), z.lazy(() => PostScalarWhereWithAggregatesInputSchema).array()]).optional(),
    OR: z.lazy(() => PostScalarWhereWithAggregatesInputSchema).array().optional(),
    NOT: z.union([z.lazy(() => PostScalarWhereWithAggregatesInputSchema), z.lazy(() => PostScalarWhereWithAggregatesInputSchema).array()]).optional(),
    id: z.union([z.lazy(() => UuidWithAggregatesFilterSchema), z.string()]).optional(),
    createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()]).optional(),
    updatedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()]).optional(),
    title: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
    content: z.union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()]).optional().nullable(),
    published: z.union([z.lazy(() => BoolWithAggregatesFilterSchema), z.boolean()]).optional(),
}).strict();
export const ProfileWhereInputSchema = z.object({
    AND: z.union([z.lazy(() => ProfileWhereInputSchema), z.lazy(() => ProfileWhereInputSchema).array()]).optional(),
    OR: z.lazy(() => ProfileWhereInputSchema).array().optional(),
    NOT: z.union([z.lazy(() => ProfileWhereInputSchema), z.lazy(() => ProfileWhereInputSchema).array()]).optional(),
    id: z.union([z.lazy(() => UuidFilterSchema), z.string()]).optional(),
    email: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
}).strict();
export const ProfileOrderByWithRelationInputSchema = z.object({
    id: z.lazy(() => SortOrderSchema).optional(),
    email: z.lazy(() => SortOrderSchema).optional()
}).strict();
export const ProfileWhereUniqueInputSchema = z.union([
    z.object({
        id: z.string(),
        email: z.string()
    }),
    z.object({
        id: z.string(),
    }),
    z.object({
        email: z.string(),
    }),
])
    .and(z.object({
    id: z.string().optional(),
    email: z.string().optional(),
    AND: z.union([z.lazy(() => ProfileWhereInputSchema), z.lazy(() => ProfileWhereInputSchema).array()]).optional(),
    OR: z.lazy(() => ProfileWhereInputSchema).array().optional(),
    NOT: z.union([z.lazy(() => ProfileWhereInputSchema), z.lazy(() => ProfileWhereInputSchema).array()]).optional(),
}).strict());
export const ProfileOrderByWithAggregationInputSchema = z.object({
    id: z.lazy(() => SortOrderSchema).optional(),
    email: z.lazy(() => SortOrderSchema).optional(),
    _count: z.lazy(() => ProfileCountOrderByAggregateInputSchema).optional(),
    _max: z.lazy(() => ProfileMaxOrderByAggregateInputSchema).optional(),
    _min: z.lazy(() => ProfileMinOrderByAggregateInputSchema).optional()
}).strict();
export const ProfileScalarWhereWithAggregatesInputSchema = z.object({
    AND: z.union([z.lazy(() => ProfileScalarWhereWithAggregatesInputSchema), z.lazy(() => ProfileScalarWhereWithAggregatesInputSchema).array()]).optional(),
    OR: z.lazy(() => ProfileScalarWhereWithAggregatesInputSchema).array().optional(),
    NOT: z.union([z.lazy(() => ProfileScalarWhereWithAggregatesInputSchema), z.lazy(() => ProfileScalarWhereWithAggregatesInputSchema).array()]).optional(),
    id: z.union([z.lazy(() => UuidWithAggregatesFilterSchema), z.string()]).optional(),
    email: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
}).strict();
export const PostCreateInputSchema = z.object({
    id: z.string().uuid().optional(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    title: z.string(),
    content: z.string().optional().nullable(),
    published: z.boolean().optional()
}).strict();
export const PostUncheckedCreateInputSchema = z.object({
    id: z.string().uuid().optional(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    title: z.string(),
    content: z.string().optional().nullable(),
    published: z.boolean().optional()
}).strict();
export const PostUpdateInputSchema = z.object({
    id: z.union([z.string().uuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
    createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
    updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
    title: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
    content: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    published: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)]).optional(),
}).strict();
export const PostUncheckedUpdateInputSchema = z.object({
    id: z.union([z.string().uuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
    createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
    updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
    title: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
    content: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    published: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)]).optional(),
}).strict();
export const PostCreateManyInputSchema = z.object({
    id: z.string().uuid().optional(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    title: z.string(),
    content: z.string().optional().nullable(),
    published: z.boolean().optional()
}).strict();
export const PostUpdateManyMutationInputSchema = z.object({
    id: z.union([z.string().uuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
    createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
    updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
    title: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
    content: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    published: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)]).optional(),
}).strict();
export const PostUncheckedUpdateManyInputSchema = z.object({
    id: z.union([z.string().uuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
    createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
    updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
    title: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
    content: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
    published: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)]).optional(),
}).strict();
export const ProfileCreateInputSchema = z.object({
    id: z.string(),
    email: z.string()
}).strict();
export const ProfileUncheckedCreateInputSchema = z.object({
    id: z.string(),
    email: z.string()
}).strict();
export const ProfileUpdateInputSchema = z.object({
    id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
    email: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
}).strict();
export const ProfileUncheckedUpdateInputSchema = z.object({
    id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
    email: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
}).strict();
export const ProfileCreateManyInputSchema = z.object({
    id: z.string(),
    email: z.string()
}).strict();
export const ProfileUpdateManyMutationInputSchema = z.object({
    id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
    email: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
}).strict();
export const ProfileUncheckedUpdateManyInputSchema = z.object({
    id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
    email: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
}).strict();
export const UuidFilterSchema = z.object({
    equals: z.string().optional(),
    in: z.string().array().optional(),
    notIn: z.string().array().optional(),
    lt: z.string().optional(),
    lte: z.string().optional(),
    gt: z.string().optional(),
    gte: z.string().optional(),
    mode: z.lazy(() => QueryModeSchema).optional(),
    not: z.union([z.string(), z.lazy(() => NestedUuidFilterSchema)]).optional(),
}).strict();
export const DateTimeFilterSchema = z.object({
    equals: z.coerce.date().optional(),
    in: z.coerce.date().array().optional(),
    notIn: z.coerce.date().array().optional(),
    lt: z.coerce.date().optional(),
    lte: z.coerce.date().optional(),
    gt: z.coerce.date().optional(),
    gte: z.coerce.date().optional(),
    not: z.union([z.coerce.date(), z.lazy(() => NestedDateTimeFilterSchema)]).optional(),
}).strict();
export const StringFilterSchema = z.object({
    equals: z.string().optional(),
    in: z.string().array().optional(),
    notIn: z.string().array().optional(),
    lt: z.string().optional(),
    lte: z.string().optional(),
    gt: z.string().optional(),
    gte: z.string().optional(),
    contains: z.string().optional(),
    startsWith: z.string().optional(),
    endsWith: z.string().optional(),
    mode: z.lazy(() => QueryModeSchema).optional(),
    not: z.union([z.string(), z.lazy(() => NestedStringFilterSchema)]).optional(),
}).strict();
export const StringNullableFilterSchema = z.object({
    equals: z.string().optional().nullable(),
    in: z.string().array().optional().nullable(),
    notIn: z.string().array().optional().nullable(),
    lt: z.string().optional(),
    lte: z.string().optional(),
    gt: z.string().optional(),
    gte: z.string().optional(),
    contains: z.string().optional(),
    startsWith: z.string().optional(),
    endsWith: z.string().optional(),
    mode: z.lazy(() => QueryModeSchema).optional(),
    not: z.union([z.string(), z.lazy(() => NestedStringNullableFilterSchema)]).optional().nullable(),
}).strict();
export const BoolFilterSchema = z.object({
    equals: z.boolean().optional(),
    not: z.union([z.boolean(), z.lazy(() => NestedBoolFilterSchema)]).optional(),
}).strict();
export const SortOrderInputSchema = z.object({
    sort: z.lazy(() => SortOrderSchema),
    nulls: z.lazy(() => NullsOrderSchema).optional()
}).strict();
export const PostCountOrderByAggregateInputSchema = z.object({
    id: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    title: z.lazy(() => SortOrderSchema).optional(),
    content: z.lazy(() => SortOrderSchema).optional(),
    published: z.lazy(() => SortOrderSchema).optional()
}).strict();
export const PostMaxOrderByAggregateInputSchema = z.object({
    id: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    title: z.lazy(() => SortOrderSchema).optional(),
    content: z.lazy(() => SortOrderSchema).optional(),
    published: z.lazy(() => SortOrderSchema).optional()
}).strict();
export const PostMinOrderByAggregateInputSchema = z.object({
    id: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    title: z.lazy(() => SortOrderSchema).optional(),
    content: z.lazy(() => SortOrderSchema).optional(),
    published: z.lazy(() => SortOrderSchema).optional()
}).strict();
export const UuidWithAggregatesFilterSchema = z.object({
    equals: z.string().optional(),
    in: z.string().array().optional(),
    notIn: z.string().array().optional(),
    lt: z.string().optional(),
    lte: z.string().optional(),
    gt: z.string().optional(),
    gte: z.string().optional(),
    mode: z.lazy(() => QueryModeSchema).optional(),
    not: z.union([z.string(), z.lazy(() => NestedUuidWithAggregatesFilterSchema)]).optional(),
    _count: z.lazy(() => NestedIntFilterSchema).optional(),
    _min: z.lazy(() => NestedStringFilterSchema).optional(),
    _max: z.lazy(() => NestedStringFilterSchema).optional()
}).strict();
export const DateTimeWithAggregatesFilterSchema = z.object({
    equals: z.coerce.date().optional(),
    in: z.coerce.date().array().optional(),
    notIn: z.coerce.date().array().optional(),
    lt: z.coerce.date().optional(),
    lte: z.coerce.date().optional(),
    gt: z.coerce.date().optional(),
    gte: z.coerce.date().optional(),
    not: z.union([z.coerce.date(), z.lazy(() => NestedDateTimeWithAggregatesFilterSchema)]).optional(),
    _count: z.lazy(() => NestedIntFilterSchema).optional(),
    _min: z.lazy(() => NestedDateTimeFilterSchema).optional(),
    _max: z.lazy(() => NestedDateTimeFilterSchema).optional()
}).strict();
export const StringWithAggregatesFilterSchema = z.object({
    equals: z.string().optional(),
    in: z.string().array().optional(),
    notIn: z.string().array().optional(),
    lt: z.string().optional(),
    lte: z.string().optional(),
    gt: z.string().optional(),
    gte: z.string().optional(),
    contains: z.string().optional(),
    startsWith: z.string().optional(),
    endsWith: z.string().optional(),
    mode: z.lazy(() => QueryModeSchema).optional(),
    not: z.union([z.string(), z.lazy(() => NestedStringWithAggregatesFilterSchema)]).optional(),
    _count: z.lazy(() => NestedIntFilterSchema).optional(),
    _min: z.lazy(() => NestedStringFilterSchema).optional(),
    _max: z.lazy(() => NestedStringFilterSchema).optional()
}).strict();
export const StringNullableWithAggregatesFilterSchema = z.object({
    equals: z.string().optional().nullable(),
    in: z.string().array().optional().nullable(),
    notIn: z.string().array().optional().nullable(),
    lt: z.string().optional(),
    lte: z.string().optional(),
    gt: z.string().optional(),
    gte: z.string().optional(),
    contains: z.string().optional(),
    startsWith: z.string().optional(),
    endsWith: z.string().optional(),
    mode: z.lazy(() => QueryModeSchema).optional(),
    not: z.union([z.string(), z.lazy(() => NestedStringNullableWithAggregatesFilterSchema)]).optional().nullable(),
    _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
    _min: z.lazy(() => NestedStringNullableFilterSchema).optional(),
    _max: z.lazy(() => NestedStringNullableFilterSchema).optional()
}).strict();
export const BoolWithAggregatesFilterSchema = z.object({
    equals: z.boolean().optional(),
    not: z.union([z.boolean(), z.lazy(() => NestedBoolWithAggregatesFilterSchema)]).optional(),
    _count: z.lazy(() => NestedIntFilterSchema).optional(),
    _min: z.lazy(() => NestedBoolFilterSchema).optional(),
    _max: z.lazy(() => NestedBoolFilterSchema).optional()
}).strict();
export const ProfileCountOrderByAggregateInputSchema = z.object({
    id: z.lazy(() => SortOrderSchema).optional(),
    email: z.lazy(() => SortOrderSchema).optional()
}).strict();
export const ProfileMaxOrderByAggregateInputSchema = z.object({
    id: z.lazy(() => SortOrderSchema).optional(),
    email: z.lazy(() => SortOrderSchema).optional()
}).strict();
export const ProfileMinOrderByAggregateInputSchema = z.object({
    id: z.lazy(() => SortOrderSchema).optional(),
    email: z.lazy(() => SortOrderSchema).optional()
}).strict();
export const StringFieldUpdateOperationsInputSchema = z.object({
    set: z.string().optional()
}).strict();
export const DateTimeFieldUpdateOperationsInputSchema = z.object({
    set: z.coerce.date().optional()
}).strict();
export const NullableStringFieldUpdateOperationsInputSchema = z.object({
    set: z.string().optional().nullable()
}).strict();
export const BoolFieldUpdateOperationsInputSchema = z.object({
    set: z.boolean().optional()
}).strict();
export const NestedUuidFilterSchema = z.object({
    equals: z.string().optional(),
    in: z.string().array().optional(),
    notIn: z.string().array().optional(),
    lt: z.string().optional(),
    lte: z.string().optional(),
    gt: z.string().optional(),
    gte: z.string().optional(),
    not: z.union([z.string(), z.lazy(() => NestedUuidFilterSchema)]).optional(),
}).strict();
export const NestedDateTimeFilterSchema = z.object({
    equals: z.coerce.date().optional(),
    in: z.coerce.date().array().optional(),
    notIn: z.coerce.date().array().optional(),
    lt: z.coerce.date().optional(),
    lte: z.coerce.date().optional(),
    gt: z.coerce.date().optional(),
    gte: z.coerce.date().optional(),
    not: z.union([z.coerce.date(), z.lazy(() => NestedDateTimeFilterSchema)]).optional(),
}).strict();
export const NestedStringFilterSchema = z.object({
    equals: z.string().optional(),
    in: z.string().array().optional(),
    notIn: z.string().array().optional(),
    lt: z.string().optional(),
    lte: z.string().optional(),
    gt: z.string().optional(),
    gte: z.string().optional(),
    contains: z.string().optional(),
    startsWith: z.string().optional(),
    endsWith: z.string().optional(),
    not: z.union([z.string(), z.lazy(() => NestedStringFilterSchema)]).optional(),
}).strict();
export const NestedStringNullableFilterSchema = z.object({
    equals: z.string().optional().nullable(),
    in: z.string().array().optional().nullable(),
    notIn: z.string().array().optional().nullable(),
    lt: z.string().optional(),
    lte: z.string().optional(),
    gt: z.string().optional(),
    gte: z.string().optional(),
    contains: z.string().optional(),
    startsWith: z.string().optional(),
    endsWith: z.string().optional(),
    not: z.union([z.string(), z.lazy(() => NestedStringNullableFilterSchema)]).optional().nullable(),
}).strict();
export const NestedBoolFilterSchema = z.object({
    equals: z.boolean().optional(),
    not: z.union([z.boolean(), z.lazy(() => NestedBoolFilterSchema)]).optional(),
}).strict();
export const NestedUuidWithAggregatesFilterSchema = z.object({
    equals: z.string().optional(),
    in: z.string().array().optional(),
    notIn: z.string().array().optional(),
    lt: z.string().optional(),
    lte: z.string().optional(),
    gt: z.string().optional(),
    gte: z.string().optional(),
    not: z.union([z.string(), z.lazy(() => NestedUuidWithAggregatesFilterSchema)]).optional(),
    _count: z.lazy(() => NestedIntFilterSchema).optional(),
    _min: z.lazy(() => NestedStringFilterSchema).optional(),
    _max: z.lazy(() => NestedStringFilterSchema).optional()
}).strict();
export const NestedIntFilterSchema = z.object({
    equals: z.number().optional(),
    in: z.number().array().optional(),
    notIn: z.number().array().optional(),
    lt: z.number().optional(),
    lte: z.number().optional(),
    gt: z.number().optional(),
    gte: z.number().optional(),
    not: z.union([z.number(), z.lazy(() => NestedIntFilterSchema)]).optional(),
}).strict();
export const NestedDateTimeWithAggregatesFilterSchema = z.object({
    equals: z.coerce.date().optional(),
    in: z.coerce.date().array().optional(),
    notIn: z.coerce.date().array().optional(),
    lt: z.coerce.date().optional(),
    lte: z.coerce.date().optional(),
    gt: z.coerce.date().optional(),
    gte: z.coerce.date().optional(),
    not: z.union([z.coerce.date(), z.lazy(() => NestedDateTimeWithAggregatesFilterSchema)]).optional(),
    _count: z.lazy(() => NestedIntFilterSchema).optional(),
    _min: z.lazy(() => NestedDateTimeFilterSchema).optional(),
    _max: z.lazy(() => NestedDateTimeFilterSchema).optional()
}).strict();
export const NestedStringWithAggregatesFilterSchema = z.object({
    equals: z.string().optional(),
    in: z.string().array().optional(),
    notIn: z.string().array().optional(),
    lt: z.string().optional(),
    lte: z.string().optional(),
    gt: z.string().optional(),
    gte: z.string().optional(),
    contains: z.string().optional(),
    startsWith: z.string().optional(),
    endsWith: z.string().optional(),
    not: z.union([z.string(), z.lazy(() => NestedStringWithAggregatesFilterSchema)]).optional(),
    _count: z.lazy(() => NestedIntFilterSchema).optional(),
    _min: z.lazy(() => NestedStringFilterSchema).optional(),
    _max: z.lazy(() => NestedStringFilterSchema).optional()
}).strict();
export const NestedStringNullableWithAggregatesFilterSchema = z.object({
    equals: z.string().optional().nullable(),
    in: z.string().array().optional().nullable(),
    notIn: z.string().array().optional().nullable(),
    lt: z.string().optional(),
    lte: z.string().optional(),
    gt: z.string().optional(),
    gte: z.string().optional(),
    contains: z.string().optional(),
    startsWith: z.string().optional(),
    endsWith: z.string().optional(),
    not: z.union([z.string(), z.lazy(() => NestedStringNullableWithAggregatesFilterSchema)]).optional().nullable(),
    _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
    _min: z.lazy(() => NestedStringNullableFilterSchema).optional(),
    _max: z.lazy(() => NestedStringNullableFilterSchema).optional()
}).strict();
export const NestedIntNullableFilterSchema = z.object({
    equals: z.number().optional().nullable(),
    in: z.number().array().optional().nullable(),
    notIn: z.number().array().optional().nullable(),
    lt: z.number().optional(),
    lte: z.number().optional(),
    gt: z.number().optional(),
    gte: z.number().optional(),
    not: z.union([z.number(), z.lazy(() => NestedIntNullableFilterSchema)]).optional().nullable(),
}).strict();
export const NestedBoolWithAggregatesFilterSchema = z.object({
    equals: z.boolean().optional(),
    not: z.union([z.boolean(), z.lazy(() => NestedBoolWithAggregatesFilterSchema)]).optional(),
    _count: z.lazy(() => NestedIntFilterSchema).optional(),
    _min: z.lazy(() => NestedBoolFilterSchema).optional(),
    _max: z.lazy(() => NestedBoolFilterSchema).optional()
}).strict();
/////////////////////////////////////////
// ARGS
/////////////////////////////////////////
export const PostFindFirstArgsSchema = z.object({
    select: PostSelectSchema.optional(),
    where: PostWhereInputSchema.optional(),
    orderBy: z.union([PostOrderByWithRelationInputSchema.array(), PostOrderByWithRelationInputSchema]).optional(),
    cursor: PostWhereUniqueInputSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    distinct: z.union([PostScalarFieldEnumSchema, PostScalarFieldEnumSchema.array()]).optional(),
}).strict();
export const PostFindFirstOrThrowArgsSchema = z.object({
    select: PostSelectSchema.optional(),
    where: PostWhereInputSchema.optional(),
    orderBy: z.union([PostOrderByWithRelationInputSchema.array(), PostOrderByWithRelationInputSchema]).optional(),
    cursor: PostWhereUniqueInputSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    distinct: z.union([PostScalarFieldEnumSchema, PostScalarFieldEnumSchema.array()]).optional(),
}).strict();
export const PostFindManyArgsSchema = z.object({
    select: PostSelectSchema.optional(),
    where: PostWhereInputSchema.optional(),
    orderBy: z.union([PostOrderByWithRelationInputSchema.array(), PostOrderByWithRelationInputSchema]).optional(),
    cursor: PostWhereUniqueInputSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    distinct: z.union([PostScalarFieldEnumSchema, PostScalarFieldEnumSchema.array()]).optional(),
}).strict();
export const PostAggregateArgsSchema = z.object({
    where: PostWhereInputSchema.optional(),
    orderBy: z.union([PostOrderByWithRelationInputSchema.array(), PostOrderByWithRelationInputSchema]).optional(),
    cursor: PostWhereUniqueInputSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
}).strict();
export const PostGroupByArgsSchema = z.object({
    where: PostWhereInputSchema.optional(),
    orderBy: z.union([PostOrderByWithAggregationInputSchema.array(), PostOrderByWithAggregationInputSchema]).optional(),
    by: PostScalarFieldEnumSchema.array(),
    having: PostScalarWhereWithAggregatesInputSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
}).strict();
export const PostFindUniqueArgsSchema = z.object({
    select: PostSelectSchema.optional(),
    where: PostWhereUniqueInputSchema,
}).strict();
export const PostFindUniqueOrThrowArgsSchema = z.object({
    select: PostSelectSchema.optional(),
    where: PostWhereUniqueInputSchema,
}).strict();
export const ProfileFindFirstArgsSchema = z.object({
    select: ProfileSelectSchema.optional(),
    where: ProfileWhereInputSchema.optional(),
    orderBy: z.union([ProfileOrderByWithRelationInputSchema.array(), ProfileOrderByWithRelationInputSchema]).optional(),
    cursor: ProfileWhereUniqueInputSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    distinct: z.union([ProfileScalarFieldEnumSchema, ProfileScalarFieldEnumSchema.array()]).optional(),
}).strict();
export const ProfileFindFirstOrThrowArgsSchema = z.object({
    select: ProfileSelectSchema.optional(),
    where: ProfileWhereInputSchema.optional(),
    orderBy: z.union([ProfileOrderByWithRelationInputSchema.array(), ProfileOrderByWithRelationInputSchema]).optional(),
    cursor: ProfileWhereUniqueInputSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    distinct: z.union([ProfileScalarFieldEnumSchema, ProfileScalarFieldEnumSchema.array()]).optional(),
}).strict();
export const ProfileFindManyArgsSchema = z.object({
    select: ProfileSelectSchema.optional(),
    where: ProfileWhereInputSchema.optional(),
    orderBy: z.union([ProfileOrderByWithRelationInputSchema.array(), ProfileOrderByWithRelationInputSchema]).optional(),
    cursor: ProfileWhereUniqueInputSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    distinct: z.union([ProfileScalarFieldEnumSchema, ProfileScalarFieldEnumSchema.array()]).optional(),
}).strict();
export const ProfileAggregateArgsSchema = z.object({
    where: ProfileWhereInputSchema.optional(),
    orderBy: z.union([ProfileOrderByWithRelationInputSchema.array(), ProfileOrderByWithRelationInputSchema]).optional(),
    cursor: ProfileWhereUniqueInputSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
}).strict();
export const ProfileGroupByArgsSchema = z.object({
    where: ProfileWhereInputSchema.optional(),
    orderBy: z.union([ProfileOrderByWithAggregationInputSchema.array(), ProfileOrderByWithAggregationInputSchema]).optional(),
    by: ProfileScalarFieldEnumSchema.array(),
    having: ProfileScalarWhereWithAggregatesInputSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
}).strict();
export const ProfileFindUniqueArgsSchema = z.object({
    select: ProfileSelectSchema.optional(),
    where: ProfileWhereUniqueInputSchema,
}).strict();
export const ProfileFindUniqueOrThrowArgsSchema = z.object({
    select: ProfileSelectSchema.optional(),
    where: ProfileWhereUniqueInputSchema,
}).strict();
export const PostCreateArgsSchema = z.object({
    select: PostSelectSchema.optional(),
    data: z.union([PostCreateInputSchema, PostUncheckedCreateInputSchema]),
}).strict();
export const PostUpsertArgsSchema = z.object({
    select: PostSelectSchema.optional(),
    where: PostWhereUniqueInputSchema,
    create: z.union([PostCreateInputSchema, PostUncheckedCreateInputSchema]),
    update: z.union([PostUpdateInputSchema, PostUncheckedUpdateInputSchema]),
}).strict();
export const PostCreateManyArgsSchema = z.object({
    data: z.union([PostCreateManyInputSchema, PostCreateManyInputSchema.array()]),
    skipDuplicates: z.boolean().optional(),
}).strict();
export const PostCreateManyAndReturnArgsSchema = z.object({
    data: z.union([PostCreateManyInputSchema, PostCreateManyInputSchema.array()]),
    skipDuplicates: z.boolean().optional(),
}).strict();
export const PostDeleteArgsSchema = z.object({
    select: PostSelectSchema.optional(),
    where: PostWhereUniqueInputSchema,
}).strict();
export const PostUpdateArgsSchema = z.object({
    select: PostSelectSchema.optional(),
    data: z.union([PostUpdateInputSchema, PostUncheckedUpdateInputSchema]),
    where: PostWhereUniqueInputSchema,
}).strict();
export const PostUpdateManyArgsSchema = z.object({
    data: z.union([PostUpdateManyMutationInputSchema, PostUncheckedUpdateManyInputSchema]),
    where: PostWhereInputSchema.optional(),
}).strict();
export const PostDeleteManyArgsSchema = z.object({
    where: PostWhereInputSchema.optional(),
}).strict();
export const ProfileCreateArgsSchema = z.object({
    select: ProfileSelectSchema.optional(),
    data: z.union([ProfileCreateInputSchema, ProfileUncheckedCreateInputSchema]),
}).strict();
export const ProfileUpsertArgsSchema = z.object({
    select: ProfileSelectSchema.optional(),
    where: ProfileWhereUniqueInputSchema,
    create: z.union([ProfileCreateInputSchema, ProfileUncheckedCreateInputSchema]),
    update: z.union([ProfileUpdateInputSchema, ProfileUncheckedUpdateInputSchema]),
}).strict();
export const ProfileCreateManyArgsSchema = z.object({
    data: z.union([ProfileCreateManyInputSchema, ProfileCreateManyInputSchema.array()]),
    skipDuplicates: z.boolean().optional(),
}).strict();
export const ProfileCreateManyAndReturnArgsSchema = z.object({
    data: z.union([ProfileCreateManyInputSchema, ProfileCreateManyInputSchema.array()]),
    skipDuplicates: z.boolean().optional(),
}).strict();
export const ProfileDeleteArgsSchema = z.object({
    select: ProfileSelectSchema.optional(),
    where: ProfileWhereUniqueInputSchema,
}).strict();
export const ProfileUpdateArgsSchema = z.object({
    select: ProfileSelectSchema.optional(),
    data: z.union([ProfileUpdateInputSchema, ProfileUncheckedUpdateInputSchema]),
    where: ProfileWhereUniqueInputSchema,
}).strict();
export const ProfileUpdateManyArgsSchema = z.object({
    data: z.union([ProfileUpdateManyMutationInputSchema, ProfileUncheckedUpdateManyInputSchema]),
    where: ProfileWhereInputSchema.optional(),
}).strict();
export const ProfileDeleteManyArgsSchema = z.object({
    where: ProfileWhereInputSchema.optional(),
}).strict();
