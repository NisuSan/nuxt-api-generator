<template>
  <div style="display: flex; gap: 20px;">
    <div id="apex-auto">
      <apex-fetcher
        composable-name="useTFetchCommentsIdProductsGetByUid"
        :status="r1.status"
        :response="cr(r1.data.value, testData.r1.response)"
        :error="r1.error.value?.message"
      />

      <apex-fetcher
        composable-name="getComments"
        :status="r1Alsias.status"
        :response="cr(r1Alsias.data.value, testData.r1.response)"
        :error="r1Alsias.error.value?.message"
      />

      <apex-fetcher
        composable-name="useTFetchMessagesProfilesPostIdOrderIdCreateByPostId"
        :status="r2.status"
        :response="cr(r2.data.value, testData.r2.response)"
        :error="r2.error.value?.message"
      />

      <apex-fetcher
        composable-name="getPosts"
        :status="r2Alsias.status"
        :response="cr(r2Alsias.data.value, testData.r2.response)"
        :error="r2Alsias.error.value?.message"
      />

      <apex-fetcher
        composable-name="useTFetchPidNameGetById"
        :status="r3.status"
        :response="cr(r3.data.value, testData.r3.response)"
        :error="r3.error.value?.message"
      />

      <apex-fetcher
        composable-name="useTFetchPidNamePostsRemoveByVariantId"
        :status="r4.status"
        :response="cr(r4.data.value, testData.r4.response)"
        :error="r4.error.value?.message"
      />

      <apex-fetcher
        composable-name="useTFetchPidTagsCreateByCategoryId"
        :status="r5.status"
        :response="cr(r5.data.value, testData.r5.response)"
        :error="r5.error.value?.message"
      />

      <apex-fetcher
        composable-name="useTFetchSettingsOrdersSlugOrderIdTagsUpdate"
        :status="r6.status"
        :response="cr(r6.data.value, testData.r6.response)"
        :error="r6.error.value?.message"
      />

      <apex-fetcher
        composable-name="useTFetchPidNameTagsRemove"
        :status="r7.status"
        :response="cr(r7.data.value, testData.r7.response)"
        :error="r7.error.value?.message"
      />

      <apex-fetcher
        composable-name="useTFetchUsersPostsCreate"
        :status="r8.status"
        :response="cr(r8.data.value, testData.r8.response)"
        :error="r8.error.value?.message"
      />

      <apex-fetcher
        composable-name="useTFetchValidationGet"
        :status="r9Valid.status"
        :response="cr(r9Valid.data.value, testData.r9Valid.response)"
        :error="r9Valid.error.value?.message"
      />
    </div>

    <div id="apex-manual">
      <apex-fetcher
        composable-name="useTFetchCommentsIdProductsGetByUidAsync"
        :status="r1AsyncData.status"
        :response="cr(r1AsyncData.data, testData.r1.response)"
        :error="r1AsyncData.error?.message"
        :fetcher="r1Async"
      />

      <apex-fetcher
        composable-name="getCommentsAsync"
        :status="r1AsyncDataAlisas.status"
        :response="cr(r1AsyncDataAlisas.data, testData.r1.response)"
        :error="r1AsyncDataAlisas.error?.message"
        :fetcher="r1AliasAsync"
      />

      <apex-fetcher
        composable-name="useTFetchMessagesProfilesPostIdOrderIdCreateByPostIdAsync"
        :status="r2AsyncData.status"
        :response="cr(r2AsyncData.data, testData.r2.response)"
        :error="r2AsyncData.error?.message"
        :fetcher="r2Async"
      />

      <apex-fetcher
        composable-name="getPostsAsync"
        :status="r2AsyncDataAlisas.status"
        :response="cr(r2AsyncDataAlisas.data, testData.r2.response)"
        :error="r2AsyncDataAlisas.error?.message"
        :fetcher="r2AliasAsync"
      />

      <apex-fetcher
        composable-name="useTFetchPidNameGetByIdAsync"
        :status="r3AsyncData.status"
        :response="cr(r3AsyncData.data, testData.r3.response)"
        :error="r3AsyncData.error?.message"
        :fetcher="r3Async"
      />

      <apex-fetcher
        composable-name="useTFetchPidNamePostsRemoveByVariantIdAsync"
        :status="r4AsyncData.status"
        :response="cr(r4AsyncData.data, testData.r4.response)"
        :error="r4AsyncData.error?.message"
        :fetcher="r4Async"
      />

      <apex-fetcher
        composable-name="useTFetchPidTagsCreateByCategoryIdAsync"
        :status="r5AsyncData.status"
        :response="cr(r5AsyncData.data, testData.r5.response)"
        :error="r5AsyncData.error?.message"
        :fetcher="r5Async"
      />

      <apex-fetcher
        composable-name="useTFetchSettingsOrdersSlugOrderIdTagsUpdateAsync"
        :status="r6AsyncData.status"
        :response="cr(r6AsyncData.data, testData.r6.response)"
        :error="r6AsyncData.error?.message"
        :fetcher="r6Async"
      />

      <apex-fetcher
        composable-name="useTFetchPidNameTagsRemoveAsync"
        :status="r7AsyncData.status"
        :response="cr(r7AsyncData.data, testData.r7.response)"
        :error="r7AsyncData.error?.message"
        :fetcher="r7Async"
      />

      <apex-fetcher
        composable-name="useTFetchUsersPostsCreateAsync"
        :status="r8AsyncData.status"
        :response="cr(r8AsyncData.data, testData.r8.response)"
        :error="r8AsyncData.error?.message"
        :fetcher="r8Async"
      />

      <apex-fetcher
        composable-name="useTFetchValidationGetAsync"
        :status="r9ValidAsyncData.status"
        :response="cr(r9ValidAsyncData.data, testData.r9Valid.response)"
        :error="r9ValidAsyncData.error?.message"
        :fetcher="r9ValidAsync"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
  type ManualFetchResult = { status: 'idle' | 'pending' | 'success' | 'error', data: any, error: any }

  const testData = {
    r1: {
      payload: {
        "email": "4oxfi3",
        "updatedAt": "5p3vry",
        "id": "y81zix",
        "uid": "0ksb5p"
      },
      response: { "data": [ [ [ false ], 17, [ { "data": { "data": { "data": true, "result1": 19 }, "result1": { "data": "pq3yix" }, "items2": { "data": { "data": false }, "result1": [ true, 33, true ] } }, "result1": "70ncov", "items2": [ "yobmy5", { "data": "8n9z5k", "result1": [ true, 60, "bclzfl" ] } ] } ] ], 17, "9qfym5" ], "result1": 47 }
    },
    r2: {
      payload: {
        "postId": "tn94sr",
        "orderId": "jwo2qw",
        "status": "w098fl",
        "innerId": "lto15y",
        "prevId": "jzm5vi"
      },
      response: { "data": { "data": true } }
    },
    r3: {
      payload: {
        "price": 57,
        "status": "dtgzf1",
        "productId": "twjiud",
        "pid": "v423az",
        "name": "musruc",
        "id": "05zp99"
      },
      response: { "data": { "data": "qmy9m9", "result1": [ false, { "data": 46, "result1": { "data": { "data": {  } }, "result1": true, "items2": 15 } } ] }, "result1": 80, "items2": { "data": [ 80, { "data": { "data": false, "result1": { "data": { "data": { "data": false } } }, "items2": "s08neh" } }, { "data": { "data": { "data": { "data": 11 } }, "result1": { "data": "chtf38" }, "items2": [ 54, [ "qpeism", false ] ] }, "result1": { "data": { "data": { "data": 78 }, "result1": "3x6iaf", "items2": [ { "data": false }, { "data": false }, false ] } } } ] } }
    },
    r4: {
      payload: {
        "pid": "oyvx63",
        "name": "pf54ey",
        "variantId": "uwkt26",
        "viewId": "amjutc",
        "isActive": true,
        "age": 57,
        "nextId": "7zfi97",
        "outerId": "n7b8t5"
      },
      response: { "data": { "data": { "data": true }, "result1": [ true, [ [ { "data": 69, "result1": false, "items2": true }, 16 ] ] ] } }
    },
    r5: {
      payload: {
        "pid": "x3tpt5",
        "categoryId": "p60xkj",
        "outerId": "gusn08",
        "status": "m5lmjm",
        "email": "tkvane",
        "createdAt": "kwh114",
        "age": 13
      },
      response: { "data": { "data": [ { "data": [ { "data": { "data": "x94djw", "result1": { "data": false } }, "result1": { "data": { "data": false, "result1": "6qrsnd" } }, "items2": [ [ 69, false ], { "data": 99, "result1": 18, "items2": "c2pxps" }, { "data": "4jkvi9", "result1": 66, "items2": "6orlw1" } ] } ], "result1": { "data": true, "result1": [ { "data": [ true, false ], "result1": "r68vq9" }, { "data": false, "result1": [ "xlzafr" ], "items2": [ 52, false, 55 ] } ] } }, true, "vyxtal" ] } }
    },
    r6: {
      payload: {
        createdAt: "tso4hd",
        prevId: "c4dfnu",
        slug: "jwtgst",
        orderId: "gunkwd"
      },
      response: { "data": { "data": { "data": true, "result1": false }, "result1": [ { "data": [ { "data": [ [ "pglv91", true, true ], [ false ] ], "result1": true }, { "data": [ true, [ "1qee8c" ] ] } ] }, [ { "data": "y082n1" } ], "hdeudt" ] }, "result1": { "data": [ { "data": { "data": { "data": false, "result1": 36, "items2": [ false ] }, "result1": { "data": true } } } ] }, "items2": "swau3g" }
    },
    r7: {
      payload: {
        "productId": "dp0i00",
        "age": 65,
        "isActive": false,
        "pid": "asjm5m",
        "name": "zvyby8"
      },
      response: { "data": { "data": { "data": true, "result1": 44, "items2": false }, "result1": 96, "items2": { "data": { "data": [ { "data": "9r8mxk" } ], "result1": "cq0rp9" }, "result1": true, "items2": { "data": { "data": { "data": {  } } } } } }, "result1": { "data": 28, "result1": 85 } }
    },
    r8: {
      payload: {
        "status": "yat6mg",
        "createdAt": "m3d45i",
        "email": "ownapr",
        "age": 24,
        "nextId": "tzpyxh",
        "isActive": false,
        "count": 1,
        "outerId": "b78z0a",
        "categoryId": "jwz9jg"
      },
      response: { "categoryId": 'jwz9jg', "data": true }
    },
    r9Valid: {
      payload: {
        a: 'info',
        b: 15,
        d: 'test',
        t: true
      },
      response: { "data": "test" }
    },
    r9Invalid: {
      payload: {
        a: '10',
        b: 10,
        d: 'test',
        t: new Date()
      },
      response: { "data": "test" }
    }
  }

  const r1 = useTFetchCommentsIdProductsGetByUid(testData.r1.payload)
  const r2 = useTFetchMessagesProfilesPostIdOrderIdCreateByPostId(testData.r2.payload)
  const r3 = useTFetchPidNameGetById(testData.r3.payload)
  const r4 = useTFetchPidNamePostsRemoveByVariantId(testData.r4.payload)
  const r5 = useTFetchPidTagsCreateByCategoryId(testData.r5.payload)
  const r6 = useTFetchSettingsOrdersSlugOrderIdTagsUpdate(testData.r6.payload)
  const r7 = useTFetchPidNameTagsRemove(testData.r7.payload)
  const r8 = useTFetchUsersPostsCreate(testData.r8.payload)
  const r9Valid = useTFetchValidationGet(testData.r9Valid.payload)
  const r1Alsias = getComments(testData.r1.payload)
  const r2Alsias = getPosts(testData.r2.payload)

  const r1AsyncData = reactive<ManualFetchResult>({ status: 'idle', data: null, error: null })
  const r2AsyncData = reactive<ManualFetchResult>({ status: 'idle', data: null, error: null })
  const r3AsyncData = reactive<ManualFetchResult>({ status: 'idle', data: null, error: null })
  const r4AsyncData = reactive<ManualFetchResult>({ status: 'idle', data: null, error: null })
  const r5AsyncData = reactive<ManualFetchResult>({ status: 'idle', data: null, error: null })
  const r6AsyncData = reactive<ManualFetchResult>({ status: 'idle', data: null, error: null })
  const r7AsyncData = reactive<ManualFetchResult>({ status: 'idle', data: null, error: null })
  const r8AsyncData = reactive<ManualFetchResult>({ status: 'idle', data: null, error: null })
  const r9ValidAsyncData = reactive<ManualFetchResult>({ status: 'idle', data: null, error: null })
  const r1AsyncDataAlisas = reactive<ManualFetchResult>({ status: 'idle', data: null, error: null })
  const r2AsyncDataAlisas = reactive<ManualFetchResult>({ status: 'idle', data: null, error: null })

  const r1Async = async () => await manualFetchWraper(useTFetchCommentsIdProductsGetByUidAsync(testData.r1.payload), r1AsyncData)
  const r2Async = async () => await manualFetchWraper(useTFetchMessagesProfilesPostIdOrderIdCreateByPostIdAsync(testData.r2.payload), r2AsyncData)
  const r3Async = async () => await manualFetchWraper(useTFetchPidNameGetByIdAsync(testData.r3.payload), r3AsyncData)
  const r4Async = async () => await manualFetchWraper(useTFetchPidNamePostsRemoveByVariantIdAsync(testData.r4.payload), r4AsyncData)
  const r5Async = async () => await manualFetchWraper(useTFetchPidTagsCreateByCategoryIdAsync(testData.r5.payload), r5AsyncData)
  const r6Async = async () => await manualFetchWraper(useTFetchSettingsOrdersSlugOrderIdTagsUpdateAsync(testData.r6.payload), r6AsyncData)
  const r7Async = async () => await manualFetchWraper(useTFetchPidNameTagsRemoveAsync(testData.r7.payload), r7AsyncData)
  const r8Async = async () => await manualFetchWraper(useTFetchUsersPostsCreateAsync(testData.r8.payload), r8AsyncData)
  const r9ValidAsync = async () => await manualFetchWraper(useTFetchValidationGetAsync(testData.r9Valid.payload), r9ValidAsyncData)
  const r1AliasAsync = async () => await manualFetchWraper(getCommentsAsync(testData.r1.payload), r1AsyncDataAlisas)
  const r2AliasAsync = async () => await manualFetchWraper(getPostsAsync(testData.r2.payload), r2AsyncDataAlisas)

  const cr = (r1: any, r2: any) => JSON.stringify(r1) == JSON.stringify(r2)

  const manualFetchWraper = async (fn: Promise<any>, result: ManualFetchResult) => {
    result.status = 'pending'
    try {
      result.data = await fn
      result.status = 'success'
    }
    catch (error) {
      result.error = error
      result.status = 'error'
    }
  }
</script>
