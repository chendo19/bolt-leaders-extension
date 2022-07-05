<?php

declare(strict_types=1);

namespace LuxNewCms\LeadersExtension;

use Bolt\Extension\BaseExtension;
use Symfony\Component\Filesystem\Filesystem;

class Extension extends BaseExtension
{

    public function getName(): string
    {
        return 'New CMS LeadersExtension';
    }


    public function install(): void
    {
        $projectDir = $this->getContainer()->getParameter('kernel.project_dir');
        $public = $this->getContainer()->getParameter('bolt.public_folder');

        $source = dirname(__DIR__) . '/assets/';
        $destination = $projectDir . '/' . $public . '/assets/leaders/';

        $filesystem = new Filesystem();
        $filesystem->mirror($source, $destination);
    }
}
