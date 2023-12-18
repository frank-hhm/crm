<?php
/**
 * @Author: Frank
 * @Email: frank_hhm@163.com
 * @Date: 2023/12/16 13:23
 */

declare(strict_types=1);

namespace app\common\model;

use app\common\enum\EnumFactory;
use app\common\traits\ModelTrait;

/**
 * 素材分组
 * Class MediaGroupModel
 * @package app\common\model\mate
 */
class MediaGroupModel extends BaseModel
{
    use ModelTrait;

    /**
     * 数据表主键
     */
    protected $pk = 'id';

    /**
     * 模型名称
     */
    protected $name = 'media_group';


    /**
     * 来源
     */
    public function searchSourceIdAttr($query, $value)
    {
        if ($value) {
            $query->where('source_id', $value);
        }
    }


    /**
     * 来源
     */
    public function searchSourceAttr($query, $value)
    {
        if ($value) {
            $query->where('source', $value);
        }
    }


    public function searchTypeAttr($query, $value)
    {
        if ($value) {
            $query->where('type', $value);
        }
    }

    public function searchGroupNameAttr($query, $value)
    {
        if ($value) {
            $query->where('group_name', $value);
        }
    }


}